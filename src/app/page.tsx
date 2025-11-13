"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, Crown, DollarSign, Facebook, Heart, Instagram, MessageCircle, Palette, Shield, Sparkles, Star, User } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="plain"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Sara Colorado Nails"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Beautiful Nails, Beautiful You"
          description="Experience professional nail care with Sara Colorado's expert services. From classic manicures to stunning nail art, we make your nails look perfect."
          tag="Premium Nail Salon"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Book Appointment",
              href: "contact"
            },
            {
              text: "View Services",
              href: "feature"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g66094295f46fc1c4251738bb8afb5677d9901e5cc9ba05786c706666c1bb5d82b5b0dcabf0882e5ed40919c13846c07c7f751128a62b8b83f1874a38e29b6cb0_1280.jpg",
              imageAlt: "Modern nail salon interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g26fdd156c91cbac7c8e07b224075e6b285da2d2c397c3f42968f6e7c4bdc41f60ac51848d42d2533a9fb47f5f054a6e0bce0488911777be2f32d32c681e87d1b_1280.jpg",
              imageAlt: "Professional manicure service"
            },
            {
              imageSrc: "https://pixabay.com/get/g64d3bace78b4d232f66fda57a976baf1d399550a5682e017fcf08cfa611f3455cf432ae5736aaa3a4d9f2e37143b925d892fe5abcf0a13c18fc200725d74c129_1280.jpg",
              imageAlt: "Creative nail art designs"
            },
            {
              imageSrc: "https://pixabay.com/get/gcf43fabc65e057a3c404a195609fe2d1ddd9ad55cca5caeba1ed371dd5af79430178fe1b7d0e0867611789486ca82e3e22b4b688397b5420aba27ef7339d4df8_1280.jpg",
              imageAlt: "Gel nail application"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Expert Nail Care Since 2018"
          description="Sara Colorado brings over 8 years of experience in professional nail care. Specializing in the latest techniques and trends, we provide exceptional service in a relaxing, clean environment."
          tag="About Sara Colorado"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Certified Professional",
              description: "Licensed nail technician with advanced certifications in gel, acrylic, and nail art techniques",
              icon: Award
            },
            {
              title: "Premium Products",
              description: "We use only the highest quality polishes, gels, and treatment products for lasting results",
              icon: Star
            },
            {
              title: "Hygienic Standards",
              description: "Hospital-grade sterilization and single-use tools ensure your safety and peace of mind",
              icon: Shield
            }
          ]}
          imageSrc="https://pixabay.com/get/gf7fb1be5f8515cf8495ef7d80b44ba396011424148a65e074f27574495e8144d451019e5f6790b30c254209c7e7b7a2a8b8161874bc4ee672598fbdebcd846bb_1280.jpg"
          imageAlt="Beautiful nail art showcase"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Signature Services"
          description="Discover our range of professional nail services designed to keep your nails healthy, beautiful, and perfectly styled."
          tag="Services"
          tagIcon={Palette}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Classic Manicure",
              description: "Professional nail shaping, cuticle care, and polish application with your choice of premium colors",
              imageSrc: "https://pixabay.com/get/gc923fc5442f67bd86eb8bbc80d8acc98ab926e2dcf34f7f5233e6715316e92f28b6f353e99b72c086292921931701bae9ab2d22e41e1b4b734aab89f4fab97a9_1280.jpg",
              imageAlt: "Classic manicure service"
            },
            {
              id: "02",
              title: "Luxury Pedicure",
              description: "Complete foot care including exfoliation, massage, nail shaping, and polish in a relaxing spa environment",
              imageSrc: "https://pixabay.com/get/g67123c19a86040a4acf04f00e091e14ea200d56513efebfc3b4b8d3258e6bfba1ea6154b431edcf75b502d4b1797065886e425d77116a976e23808d126c0c11c_1280.jpg",
              imageAlt: "Luxury pedicure treatment"
            },
            {
              id: "03",
              title: "Nail Art Design",
              description: "Custom nail art creations from simple accents to intricate designs that express your unique style",
              imageSrc: "https://pixabay.com/get/gd8711625c74d48b9c9b425ffce5a9cedf2a91a2a3fc33bc836d3046cf9d5018c830a214670847f9875f8fafbc7a9a39105131876cdba771344540155d2b13ff1_1280.jpg",
              imageAlt: "Custom nail art designs"
            },
            {
              id: "04",
              title: "Gel Manicure",
              description: "Long-lasting gel polish application that provides chip-free shine for up to 3 weeks",
              imageSrc: "https://pixabay.com/get/gee6be38d7c026254932f31e576a89d162604da9ee9cef7a1efd158c3d84728923dbe7dfd5909f1eea1f19db4c99bcf0f3818ff21b1b9946fff0493cc0d0247dc_1280.jpg",
              imageAlt: "Gel manicure application"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Service Packages"
          description="Choose from our carefully crafted service packages designed to meet your nail care needs and budget."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Classic Care",
              badgeIcon: Sparkles,
              price: "$35",
              subtitle: "Perfect for regular maintenance",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "feature"
                }
              ],
              features: [
                "Classic manicure or pedicure",
                "Nail shaping and cuticle care",
                "Choice of regular polish",
                "Hand or foot massage"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$55",
              subtitle: "Enhanced care with lasting results",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "feature"
                }
              ],
              features: [
                "Gel manicure or luxury pedicure",
                "Extended nail and cuticle treatment",
                "Premium polish collection",
                "Relaxing spa massage",
                "Complimentary nail file"
              ]
            },
            {
              id: "deluxe",
              badge: "Ultimate Experience",
              badgeIcon: Star,
              price: "$85",
              subtitle: "Complete pampering package",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "feature"
                }
              ],
              features: [
                "Gel manicure and luxury pedicure combo",
                "Custom nail art design",
                "Premium treatment products",
                "Extended relaxation massage",
                "Take-home nail care kit"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Sara Colorado"
          description="Get to know the expert behind your beautiful nails"
          tag="Our Expert"
          tagIcon={User}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sara Colorado",
              role: "Master Nail Technician",
              description: "With over 8 years of experience in the nail industry, Sara specializes in advanced nail art techniques, gel applications, and luxury spa treatments. Licensed and certified in the latest nail care innovations.",
              imageSrc: "https://pixabay.com/get/g521051be0b34fd8945b0f7241cdb8c6d2cd2e9e9302c00429cb8816cc497a14ba7094709931a420c77b558ecdb5df2675275098522cc6b02d13c24eb3a002e7f_1280.jpg",
              imageAlt: "Sara Colorado professional portrait",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/saracoloradonails"
                },
                {
                  icon: Facebook,
                  url: "https://facebook.com/saracoloradonails"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real experiences from satisfied customers who love their nails"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "Marketing Manager",
              testimonial: "Sara is absolutely amazing! Her attention to detail and artistic skills are unmatched. My gel manicures last for weeks and always look perfect.",
              imageSrc: "https://pixabay.com/get/g5a5ec193a6d2843f4f346e0e85fbd94dbad831a3fe309a2aac91997497a78e05e8f16a84b40c8b0f0e2c43f146135c5846646957b9c50443b6918cdf8aaa576a_1280.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "2",
              name: "Jessica Chen",
              role: "Business Owner",
              testimonial: "The best nail salon experience I've ever had. Sara's nail art designs are incredible and the salon is always spotlessly clean. Highly recommend!",
              imageSrc: "https://pixabay.com/get/g9e34bd4f15d28a224552577dfa4a4ef7184beafc85ff67c45b64409e3420401c23833ed11cb5a350e849d133bf180cc858e4bff847ed57fce03a487d2728b5b5_1280.jpg",
              imageAlt: "Jessica Chen portrait"
            },
            {
              id: "3",
              name: "Amanda Taylor",
              role: "Teacher",
              testimonial: "I've been coming to Sara for over 2 years and wouldn't go anywhere else. Professional, friendly, and my nails always look stunning!",
              imageSrc: "https://pixabay.com/get/g115f2a07367468f62c7fb8a6fba0222f6c9853ddb7f3be5dcc59003e1b9c61178edda7252776322de5ffbded22d9bdf2bc2516c39c8a741e76e136b38f6a9a54_1280.jpg",
              imageAlt: "Amanda Taylor portrait"
            },
            {
              id: "4",
              name: "Maria Santos",
              role: "Healthcare Worker",
              testimonial: "Sara understands exactly what I need for my busy lifestyle. Quick service, long-lasting results, and always a relaxing experience.",
              imageSrc: "https://pixabay.com/get/gecca39f0b774a796e3f24f3cad8dc1b6e78f35a79f1fae243974beef2298d5b2256f36bb8400d961b2c88b86599b8aee9abdc924c49d8641bc9e922938ea996c_1280.jpg",
              imageAlt: "Maria Santos portrait"
            },
            {
              id: "5",
              name: "Lisa Johnson",
              role: "Real Estate Agent",
              testimonial: "Professional service and beautiful results every time. Sara's expertise shows in every detail. My nails have never looked better!",
              imageSrc: "https://pixabay.com/get/g6acb9f7e848b5e120d86c8685dba9ee6c748fb3572fbab436bde545a35163be7e47514d6e538519b242ff58965cde3b707867bf5773d8df468b1a933025f806f_1280.jpg",
              imageAlt: "Lisa Johnson portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our nail services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How long does a gel manicure last?",
              content: "Our gel manicures typically last 2-3 weeks with proper care. We use high-quality gel products and proper application techniques to ensure maximum longevity."
            },
            {
              id: "2",
              title: "Do you sterilize your tools?",
              content: "Absolutely! We follow strict sterilization protocols using hospital-grade equipment. All tools are sterilized between clients, and we use single-use items whenever possible."
            },
            {
              id: "3",
              title: "Can you create custom nail art designs?",
              content: "Yes! Sara specializes in custom nail art and can create designs based on your preferences, special occasions, or even match your outfit. We love bringing creative visions to life!"
            },
            {
              id: "4",
              title: "What nail polish brands do you use?",
              content: "We use premium brands including OPI, Essie, CND, and other professional-grade polishes known for their quality, longevity, and extensive color selection."
            },
            {
              id: "5",
              title: "How far in advance should I book?",
              content: "We recommend booking 1-2 weeks in advance, especially for weekend appointments. However, we often have same-day availability for weekday appointments."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Appointment"
          title="Schedule Your Nail Care Session"
          description="Ready for beautiful nails? Contact us to book your appointment or ask any questions. We look forward to pampering you!"
          tagIcon={Calendar}
          imageSrc="https://pixabay.com/get/gbff22bb240afcc292efef4ebb9ba41b2c39fc5f03100521d24e4e075e4d0a47e7e37bfd0f591762e40d6c8e207c9a905b9a904963a8b3bbf721fb94a0488b6d0_1280.jpg"
          imageAlt="Nail salon interior"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Book Now"
          termsText="By booking, you agree to our appointment policies. We'll contact you within 24 hours to confirm your appointment time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Classic Manicure",
                  href: "feature"
                },
                {
                  label: "Gel Manicure",
                  href: "feature"
                },
                {
                  label: "Luxury Pedicure",
                  href: "feature"
                },
                {
                  label: "Nail Art",
                  href: "feature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "About Sara",
                  href: "about"
                },
                {
                  label: "Testimonials",
                  href: "testimonial"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book Appointment",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
          logoText="Sara Colorado Nails"
          copyrightText="© 2025 | Sara Colorado Nail Salon"
        />
      </div>
    </ThemeProvider>
  );
}