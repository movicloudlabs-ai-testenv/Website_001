export const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/movicloud-labs-pvt-ltd/",
      icon: "/assets/icons/linkedin.webp",
    },
    {
      name: "X",
      url: "https://x.com/movicloudlabs?s=11",
      icon: "/assets/icons/x.webp",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1FutXy6hCH/?mibextid=wwXIfr",
      icon: "/assets/icons/facebook.webp",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/movicloudlabs?igsh=MWY4YnVxMXNhdmQwbg%3D%3D&utm_source=qr",
      icon: "/assets/icons/instagram.webp?v=2",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919600701007",
      icon: "/assets/icons/whatsapp.webp",
    },
  ];

  return (
    <section id="contact">
      <footer className="bg-card border-t border-border mt-12 md:mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-sm text-muted-foreground text-center">
              &copy; 2025 MoviCloud Labs Private Limited. All rights reserved.
            </p>

            <div className="flex justify-center items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-7 h-7 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
