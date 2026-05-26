import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, guests, message } = body

    // 1 — Save to Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      )
      await supabase.from('hire_enquiries').insert([{
        name,
        email,
        phone,
        event_date: date || null,
        guests: guests || null,
        message,
      }])
    }

    // 2 — Send email via Resend
    await resend.emails.send({
      from: 'Claud W Dennis <noreply@claudwdennis.com>',
      to: ['Claudwdennisbusiness@gmail.com'],
      replyTo: email,
      subject: `New Private Hire Enquiry — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1E1208;">
          
          <div style="background: #2B1A0E; padding: 32px 40px; margin-bottom: 32px;">
            <p style="font-family: monospace; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #C17F3A; margin: 0 0 8px;">New Enquiry</p>
            <h1 style="font-size: 24px; font-weight: 700; color: #F5EFE0; margin: 0; line-height: 1.2;">Private Hire Request</h1>
          </div>

          <div style="padding: 0 40px;">

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #7A5C3A; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #7A5C3A;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-size: 15px;"><a href="mailto:${email}" style="color: #C17F3A;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #7A5C3A;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-size: 15px;">${phone}</td>
              </tr>` : ''}
              ${date ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #7A5C3A;">Preferred Date</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-size: 15px;">${new Date(date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
              </tr>` : ''}
              ${guests ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #7A5C3A;">Guests</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE3CC; font-size: 15px;">${guests}</td>
              </tr>` : ''}
            </table>

            <div style="background: #F5EFE0; padding: 20px 24px; border-left: 3px solid #C17F3A; margin-bottom: 32px;">
              <p style="font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #7A5C3A; margin: 0 0 10px;">Message</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="font-size: 13px; color: #7A5C3A; border-top: 1px solid #EDE3CC; padding-top: 20px; margin-bottom: 40px;">
              Reply directly to this email to respond to ${name}.
            </p>

          </div>
        </div>
      `,
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error('Hire enquiry error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
