import { Button } from "@/components/ui/Button";
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

const VALUE = [
  {
    heading: "Hiển thị chuyên nghiệp",
    body: "Nội dung được trình chiếu trên màn hình 4K, phù hợp với không gian giao dịch hiện đại.",
  },
  {
    heading: "Cập nhật linh hoạt",
    body: "Hình ảnh và video có thể được thay đổi theo từng chương trình truyền thông.",
  },
  {
    heading: "Quản lý từ xa",
    body: "CMS Cloud hỗ trợ cập nhật nội dung mà không cần thao tác trực tiếp trên từng thiết bị.",
  },
  {
    heading: "Đồng hành triển khai",
    body: "SHT hỗ trợ tư vấn, giao hàng, lắp đặt và hướng dẫn vận hành.",
  },
];

const BADGES = [
  "Digital Standee 50\"",
  "4K UHD",
  "CMS Cloud",
  "Lắp đặt & cấu hình",
];

const CTA_LABEL = "Đăng ký demo giải pháp tương tự";
const CTA_HREF = "#dang-ky-demo";
const CTA_SUPPORT = "SHT hỗ trợ demo tại TP.HCM và Bình Dương theo lịch thiết bị.";

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

        <div className="vbtcs-value mt-12 sm:mt-16">
          <h3 className="text-xl font-semibold text-ink sm:text-2xl">
            Giá trị của giải pháp
          </h3>
          <div className="vbtcs-value-grid mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {VALUE.map((item) => (
              <article
                key={item.heading}
                className="vbtcs-value-card h-full rounded-[1.25rem] border border-border bg-white p-4 sm:p-6"
              >
                <h4 className="text-sm font-semibold leading-5 text-ink sm:text-base">
                  {item.heading}
                </h4>
                <p className="mt-2 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="vbtcs-badges mt-8 flex flex-wrap gap-2 sm:mt-10"
          aria-label="Thông tin giải pháp"
        >
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="vbtcs-badge rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="vbtcs-cta mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
          <Button href={CTA_HREF} className="w-full justify-center sm:w-auto">
            {CTA_LABEL}
          </Button>
          <p className="text-xs leading-5 text-muted">{CTA_SUPPORT}</p>
        </div>
      </Container>
    </section>
  );
}
