import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/logo1_1762750767596.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src={logoImage}
              alt="Knockturn"
              className="h-12 w-auto mb-6"
              data-testid="img-footer-logo"
            />
            <p className="text-muted-foreground text-sm mb-6">
              Leading product management and property innovation company in Chennai, India.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-twitter">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-linkedin">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-instagram">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Industries", "Careers"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors" data-testid={`link-footer-${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span data-testid="text-address">Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span data-testid="text-email">info@knockturn.com</span>
              </li>
              <li className="flex gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span data-testid="text-phone">+91 XXX XXX XXXX</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 glow-blue focus:glow-blue-strong transition-all"
                data-testid="input-newsletter-email"
              />
              <Button variant="default" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © 2025 Knockturn Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy">
                <span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors" data-testid="link-terms">
                  Terms of Service
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
