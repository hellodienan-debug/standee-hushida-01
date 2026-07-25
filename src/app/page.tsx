import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustMetrics } from "@/components/landing/TrustMetrics";
import { DeploymentGallerySection } from "@/components/landing/DeploymentGallerySection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { CmsCloudSection } from "@/components/landing/CmsCloudSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { ProductHighlightsSection } from "@/components/landing/ProductHighlightsSection";
import { DeploymentProcessSection } from "@/components/landing/DeploymentProcessSection";
import { TrialLeadSection } from "@/components/landing/TrialLeadSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";
import { faqs } from "@/content/landing.vi";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main">
        <HeroSection />
        <TrustMetrics />
        <DeploymentGallerySection />
        <IndustriesSection />
        <CmsCloudSection />
        <ComparisonSection />
        <ProductHighlightsSection />
        <DeploymentProcessSection />
        <TrialLeadSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
