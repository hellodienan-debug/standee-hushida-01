import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustMetrics } from "@/components/landing/TrustMetrics";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { DeploymentGallerySection } from "@/components/landing/DeploymentGallerySection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { CmsCloudSection } from "@/components/landing/CmsCloudSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { ProductHighlightsSection } from "@/components/landing/ProductHighlightsSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { TrialSection } from "@/components/landing/TrialSection";
import { DeploymentProcessSection } from "@/components/landing/DeploymentProcessSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { LeadForm } from "@/components/landing/LeadForm";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
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
        <div id="solutions">
          <SolutionSection />
          <CmsCloudSection />
        </div>
        <UseCasesSection />
        <ProductHighlightsSection />
        <ComparisonSection />
        <TrialSection />
        <DeploymentProcessSection />
        <FaqSection />
        <LeadForm />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
