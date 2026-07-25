import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STORY = [
  {
    heading: "Bài toán",
    body: "Nội dung truyền thông tại điểm giao dịch cần được hiển thị rõ ràng, chuyên nghiệp và thuận tiện khi cập nhật theo từng chương trình.",
  },
  {
    heading: "Giải pháp",
    body: "SHT đề xuất Digital Standee Hushida 50 inch kết hợp CMS Cloud, giúp trình chiếu hình ảnh và video, đồng thời hỗ trợ cập nhật nội dung từ xa.",
  },
  {
    heading: "Triển khai",
    body: "Thiết bị được giao, lắp đặt, cấu hình và hỗ trợ thiết lập nội dung ban đầu để sẵn sàng đưa vào sử dụng.",
  },
];

const IMAGE_ALT = "Digital Standee Hushida triển khai tại khu vực giao dịch VietinBank";
const IMAGE_EXPECTED_PATH = "/images/case-study/vietinbank-case-study.jpg";

export function VietinBankCaseStudy() {
  return (
    <section
      id="vietinbank-case-study"
      className="vbtcs-section bg-surface section-pad"
    >
      <Container>
        <SectionHeader
          eyebrow="DỰ ÁN THỰC TẾ"
          title="Giải pháp truyền thông số triển khai tại VietinBank"
          description="SHT triển khai màn hình Digital Standee Hushida nhằm hỗ trợ trình chiếu nội dung truyền thông, chương trình và thông tin dành cho khách hàng tại khu vực giao dịch."
        />

        <div className="vbtcs-main mt-10 grid gap-6 md:mt-12 md:grid-cols-[55fr_45fr] md:gap-8 lg:mt-14 lg:gap-10">
          {/* Local image placeholder. Expected replacement path: {IMAGE_EXPECTED_PATH} */}
          <div
            role="img"
            aria-label={IMAGE_ALT}
            className="vbtcs-image relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[1.25rem] border border-border bg-brand-light"
          >
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Ảnh triển khai thực tế
              </p>
              <p className="mt-2 text-sm font-medium text-brand/80">
                {IMAGE_EXPECTED_PATH}
              </p>
            </div>
          </div>
          <p className="vbtcs-caption mt-3 text-sm text-muted md:hidden">
            Hình ảnh triển khai thực tế tại khu vực giao dịch.
          </p>

          <div className="vbtcs-story flex flex-col gap-4">
            {STORY.map((item) => (
              <article
                key={item.heading}
                className="vbtcs-story-card rounded-[1.25rem] border border-border bg-white p-5 sm:p-7"
              >
                <h3 className="text-base font-semibold text-ink sm:text-lg">
                  {item.heading}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="vbtcs-caption hidden text-sm text-muted md:mt-3 md:block">
          Hình ảnh triển khai thực tế tại khu vực giao dịch.
        </p>
      </Container>
    </section>
  );
}
