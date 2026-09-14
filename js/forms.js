/**
 * WEBVERRA TECHNOLOGIES - WHATSAPP CONTACT FORM
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectEnquiryForm();
});

function initProjectEnquiryForm() {
  const form = document.getElementById('project-enquiry-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const errorBanner = document.getElementById('form-error');
  const successBanner = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span><span>Preparing WhatsApp...</span>';

    if (errorBanner) errorBanner.classList.remove('visible');
    if (successBanner) successBanner.classList.remove('visible');

    try {
        const data = Object.fromEntries(new FormData(form));

        // Sanitize and trim
        const name = (data.name || '').trim();
        const email = (data.email || '').trim();
        const phone = (data.phone || '').trim();
        const service = (data.service || '').trim();
        const details = (data.details || '').trim();

        // Exact Master Prompt Structure (No Markdown)
        const message = `New Project Enquiry — Webverra Technologies

Hello Webverra Technologies,

You have received a new project enquiry through the Webverra Technologies website.

━━━━━━━━━━━━━━━━━━━━
CLIENT DETAILS
Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone || 'Not provided'}

SERVICE REQUESTED
${service || 'Not provided'}

PROJECT DETAILS
${details || 'Not provided'}
━━━━━━━━━━━━━━━━━━━━

NEXT STEPS
Please review the enquiry and get in touch with the client to discuss their project requirements.

Webverra Technologies
Building Systems That Grow Your Business.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        // Reset form and show success
        form.reset();
        
        // Show success message as required by prompt
        if (successBanner) {
            successBanner.innerHTML = 'Thanks for reaching out! Your enquiry is ready to send on WhatsApp. Please press Send in WhatsApp to complete your enquiry.';
            successBanner.classList.add('visible');
            successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        submitBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">check_circle</span><span>Redirected</span>';
        
        setTimeout(() => { 
            submitBtn.innerHTML = originalBtnContent; 
            submitBtn.disabled = false; 
        }, 4000);

    } catch (err) {
        console.error("WhatsApp redirection failed:", err);
        if (errorBanner) {
            errorBanner.innerHTML = 'Something went wrong while preparing your WhatsApp message. Please try again or contact us directly on WhatsApp.';
            errorBanner.classList.add('visible');
        }
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
    }
  });
}
