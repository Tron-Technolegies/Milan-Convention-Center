import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-bg-main border-t border-gold-primary/20 pt-20 pb-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-4 mb-8">
              <img
                src="/logo.png"
                alt="Milan Conventional Center"
                className="w-12 h-12 object-contain"
              />
              <div className="text-text-primary tracking-widest uppercase text-lg font-light">
                Milan<span className="text-gold-primary">.</span>
              </div>
            </a>

            <p className="text-text-secondary text-sm leading-relaxed max-w-sm font-light mb-8">
              A 43,000 sq.ft. luxury convention center in Chettuva, Thrissur, Kerala — weddings, galas, conferences and outdoor celebrations beneath the mountain horizon.
            </p>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/milaninternational._?stkn=MWJ5amk3ZTB2dzJmcA==" className="w-10 h-10 border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-bg-main transition-colors rounded-full">
                {/* IG Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

              {/* <a href="#" className="w-10 h-10 border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-bg-main transition-colors rounded-full"> */}
              {/* FB Icon placeholder */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a> */}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-primary mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Facilities', 'Events', 'Gallery', 'Testimonials'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-text-secondary hover:text-gold-primary transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-primary mb-6">Contact & Inquiries</h4>
            <div className="space-y-4 text-sm text-text-secondary font-light">
              <p>Milan International Convention Centre <br /> Chettuva, Thrissur,<br />Kerala, 680615, India</p>
              <p className="pt-2">
                <a href="mailto:milaninternational26@gmail.com" className="hover:text-gold-primary transition-colors">milaninternational26@gmail.com</a>
              </p>
              <p>
                <a href="tel:+917770008435" className="hover:text-gold-primary transition-colors">+91 7770008435</a>
              </p>
            </div>

            <div className="mt-8 hidden">
              <a href="https://wa.me/917770008435" target="_blank" rel="noopener noreferrer" className="btn-gold w-full text-center">
                Call / WhatsApp for Booking
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gold-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] tracking-[0.1em] uppercase text-text-secondary/60">
          <div>&copy; {new Date().getFullYear()} TRON TECHNOLOGIES.All Rights Reserved.</div>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-gold-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-primary transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
