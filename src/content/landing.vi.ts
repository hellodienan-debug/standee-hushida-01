import type {
  AnnouncementContent,
  ComparisonRow,
  FaqItem,
  GalleryContent,
  Industry,
  LeadFormContent,
  Metric,
  NavItem,
  ProcessStep,
  SolutionStep,
  Spec,
} from "@/types/content";

// =========================================================================
// THÔNG TIN LIÊN HỆ — TODO: Cập nhật khi có thông tin chính thức từ SHT
// =========================================================================
export const siteConfig = {
  name: "SHT Technology",
  product: "Hushida Digital Signage 50 inch",
  phone: "0703.5555.44",
  phoneHref: "tel:+84703555544",
  email: "Dienah@shtech.com.vn",
  emailHref: "mailto:Dienah@shtech.com.vn",
  website: "shtech.com.vn",
  websiteHref: "https://shtech.com.vn",
  address: "51/2 Thành Thái, Phường Diên Hồng, TP.HCM",
  url: "https://shtech.com.vn",
  zaloHref: "#",
};

// =========================================================================
// THANH THÔNG BÁO
// =========================================================================
export const announcement: AnnouncementContent = {
  label: "Dùng thử miễn phí 7 ngày tại Thành phố Hồ Chí Minh và Bình Dương.",
  href: "#dang-ky-demo",
  cta: "Xem điều kiện chương trình",
};

// =========================================================================
// HEADER
// =========================================================================
export const navigation: NavItem[] = [
  { label: "Giải pháp", href: "#cms" },
  { label: "Ứng dụng", href: "#industries" },
  { label: "Thông số", href: "#product" },
  { label: "Dự án thực tế", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

// =========================================================================
// HERO
// =========================================================================
export const hero = {
  eyebrow: "Giải pháp truyền thông số cho doanh nghiệp",
  title: "Biến mỗi không gian thành một điểm chạm thương hiệu số.",
  description:
    "Trình chiếu nội dung 4K sống động, cập nhật từ xa qua CMS Cloud và đồng bộ truyền thông trên nhiều thiết bị với Hushida Digital Standee 50 inch.",
  primaryCta: { label: "Đăng ký dùng thử 7 ngày", href: "#dang-ky-demo" },
  secondaryCta: { label: "Nhận tư vấn và báo giá", href: "#dang-ky-demo" },
  trustPoints: [
    "Demo miễn phí",
    "Giao hàng 1–2 ngày",
    "Bảo hành 12 tháng",
  ],
  microcopy:
    "SHT hỗ trợ demo tại Thành phố Hồ Chí Minh và Bình Dương theo lịch thiết bị.",
  badges: ["4K UHD", "Android 14", "CMS Cloud", "Bảo hành 12 tháng"],
};

// =========================================================================
// DẢI CHỈ SỐ TIN CẬY
// =========================================================================
export const trustMetrics: Metric[] = [
  { value: "50”", label: "Kích thước màn hình" },
  { value: "4K UHD", label: "Độ phân giải siêu nét", animate: false },
  { value: "Android 14", label: "Hệ điều hành hiện đại", animate: false },
  { value: "CMS Cloud", label: "Quản lý nội dung từ xa", animate: false },
  { value: "12 tháng", label: "Bảo hành chính hãng" },
  { value: "7 ngày", label: "Dùng thử theo chính sách" },
];

// =========================================================================
// NGÀNH ỨNG DỤNG
// =========================================================================
export const industries: Industry[] = [
  {
    name: "Ngân hàng",
    description:
      "Truyền thông chương trình, sản phẩm và hướng dẫn khách hàng tại sảnh giao dịch.",
    icon: "bank",
  },
  {
    name: "Showroom",
    description:
      "Trình chiếu sản phẩm, ưu đãi và nội dung thương hiệu trong không gian trưng bày.",
    icon: "car",
  },
  {
    name: "Bán lẻ",
    description:
      "Cập nhật chương trình khuyến mãi và nội dung tại nhiều điểm bán.",
    icon: "shopping-bag",
  },
  {
    name: "Văn phòng",
    description:
      "Truyền thông nội bộ, thông báo và cập nhật hoạt động doanh nghiệp.",
    icon: "building",
  },
  {
    name: "Khách sạn",
    description:
      "Hiển thị thông tin dịch vụ, sự kiện và hướng dẫn dành cho khách hàng.",
    icon: "hotel",
  },
  {
    name: "Bất động sản",
    description:
      "Trình chiếu dự án, mặt bằng, tiện ích và thông tin tư vấn bán hàng.",
    icon: "home",
  },
];

// =========================================================================
// HÌNH ẢNH TRIỂN KHAI THỰC TẾ
// =========================================================================
export const deploymentGallery: GalleryContent = {
  headline: "Hình ảnh triển khai thực tế",
  description:
    "Standee Hushida đã được lắp đặt tại nhiều không gian giao dịch và doanh nghiệp.",
  images: [
    {
      src: "/images/gallery/standee-lobby.webp",
      alt: "Standee Hushida tại sảnh lễ tân doanh nghiệp",
      caption: "Sảnh lễ tân doanh nghiệp",
      span: "row-span-2",
    },
    {
      src: "/images/gallery/standee-showroom.webp",
      alt: "Standee Hushida trình chiếu tại showroom",
      caption: "Showroom bán hàng",
    },
    {
      src: "/images/gallery/standee-retail.webp",
      alt: "Standee Hushida tại điểm bán lẻ",
      caption: "Khu vực điểm bán",
    },
    {
      src: "/images/gallery/standee-office.webp",
      alt: "Standee Hushida tại văn phòng",
      caption: "Văn phòng doanh nghiệp",
      span: "row-span-2",
    },
    {
      src: "/images/gallery/standee-hospitality.webp",
      alt: "Standee Hushida tại khu vực hospitality",
      caption: "Khu vực hospitality",
    },
    {
      src: "/images/gallery/standee-meeting.webp",
      alt: "Standee Hushida tại phòng họp và hội nghị",
      caption: "Phòng họp & hội nghị",
    },
  ],
};

// =========================================================================
// CASE STUDY — DỰ ÁN TRIỂN KHAI THỰC TẾ
// =========================================================================
export const caseStudy = {
  eyebrow: "Dự án thực tế",
  title: "Giải pháp truyền thông số triển khai tại VietinBank",
  description:
    "SHT triển khai màn hình Digital Standee Hushida nhằm hỗ trợ trình chiếu nội dung truyền thông, chương trình và thông tin dành cho khách hàng tại khu vực giao dịch.",
  /**
   * Ảnh minh họa — TODO:
   * Khi có ảnh triển khai thực tế tại VietinBank, thay src bằng
   * đường dẫn /images/case-study/vietinbank-standee.webp và cập nhật
   * alt cho phù hợp (mô tả rõ standee + khu vực giao dịch).
   */
  image: {
    src: "/images/gallery/standee-lobby.webp",
    alt: "Hình ảnh triển khai Digital Standee Hushida tại khu vực giao dịch",
    caption: "Hình ảnh triển khai thực tế tại khu vực giao dịch.",
  },
  story: [
    {
      title: "Bài toán",
      body: "Nội dung truyền thông tại điểm giao dịch cần được hiển thị rõ ràng, chuyên nghiệp và thuận tiện khi cập nhật theo từng chương trình.",
    },
    {
      title: "Giải pháp",
      body: "SHT đề xuất Digital Standee Hushida 50 inch kết hợp CMS Cloud, giúp trình chiếu hình ảnh và video, đồng thời hỗ trợ cập nhật nội dung từ xa.",
    },
    {
      title: "Triển khai",
      body: "Thiết bị được giao, lắp đặt, cấu hình và hỗ trợ thiết lập nội dung ban đầu để sẵn sàng đưa vào sử dụng.",
    },
  ],
  value: {
    title: "Giá trị của giải pháp",
    cards: [
      {
        title: "Hiển thị chuyên nghiệp",
        body: "Nội dung được trình chiếu trên màn hình 4K phù hợp với không gian giao dịch hiện đại.",
      },
      {
        title: "Cập nhật linh hoạt",
        body: "Hình ảnh và video có thể được thay đổi theo từng chương trình truyền thông.",
      },
      {
        title: "Quản lý từ xa",
        body: "CMS Cloud hỗ trợ cập nhật nội dung mà không cần thao tác trực tiếp trên từng thiết bị.",
      },
      {
        title: "Đồng hành triển khai",
        body: "SHT hỗ trợ tư vấn, giao hàng, lắp đặt và hướng dẫn vận hành.",
      },
    ],
  },
  badges: ["Digital Standee 50\"", "4K UHD", "CMS Cloud", "Lắp đặt & cấu hình"],
  cta: {
    label: "Đăng ký demo giải pháp tương tự",
    href: "#dang-ky-demo",
  },
  microcopy:
    "SHT hỗ trợ demo tại TP.HCM và Bình Dương theo lịch thiết bị.",
};

// =========================================================================
// GIẢI PHÁP
// =========================================================================
export const solution = {
  headline:
    "Quản lý toàn bộ nội dung từ một nơi",
  description:
    "Tải nội dung, lựa chọn thiết bị, lên lịch và đồng bộ hiển thị từ xa trên một nền tảng CMS Cloud.",
  steps: [
    {
      step: 1,
      title: "Tải nội dung",
      description: "Upload hình ảnh, video hoặc bố cục theo chiến dịch.",
    },
    {
      step: 2,
      title: "Chọn thiết bị",
      description: "Một hoặc nhiều màn hình tại các chi nhánh.",
    },
    {
      step: 3,
      title: "Lên lịch",
      description: "Sắp xếp theo khung giờ, ngày hoặc chương trình.",
    },
    {
      step: 4,
      title: "Hiển thị",
      description: "Nội dung đồng bộ trên mọi thiết bị từ xa.",
    },
  ] satisfies SolutionStep[],
  benefits: [
    {
      title: "Quản lý nhiều thiết bị",
      description:
        "Theo dõi và điều khiển nhiều màn hình từ cùng một tài khoản CMS.",
    },
    {
      title: "Cập nhật nội dung từ xa",
      description:
        "Thay đổi hình ảnh và video mà không cần thao tác trực tiếp trên từng thiết bị.",
    },
    {
      title: "Chia bố cục màn hình",
      description:
        "Kết hợp video, hình ảnh, văn bản và các vùng nội dung trên cùng màn hình.",
    },
    {
      title: "Phát nội dung ngoại tuyến",
      description:
        "Nội dung đã tải vẫn tiếp tục phát khi kết nối Internet bị gián đoạn.",
    },
  ],
};

// =========================================================================
// THÔNG SỐ NỔI BẬT
// =========================================================================
export const specs: Spec[] = [
  {
    label: "Kích thước",
    value: "50 inch",
    benefit:
      "Kích thước phù hợp cho khu vực lễ tân, sảnh và điểm bán.",
  },
  {
    label: "Độ phân giải",
    value: "4K UHD",
    benefit:
      "Hình ảnh sắc nét cho video thương hiệu và nội dung sản phẩm.",
  },
  {
    label: "Hệ điều hành",
    value: "Android 14",
    benefit:
      "Nền tảng hiện đại, linh hoạt cho nhu cầu trình chiếu.",
  },
  {
    label: "Bộ xử lý",
    value: "Cortex-A73",
    benefit:
      "Xử lý mượt mà các nội dung đa phương tiện.",
  },
  {
    label: "Đồ họa",
    value: "Mali G52",
    benefit:
      "Hỗ trợ hiển thị đồ họa và video chất lượng cao.",
  },
  {
    label: "RAM",
    value: "4GB",
    benefit:
      "Vận hành ổn định và lưu trữ nội dung cục bộ.",
  },
  {
    label: "Bộ nhớ trong",
    value: "32GB",
    benefit:
      "Không gian lưu trữ cho nhiều bộ nội dung trình chiếu.",
  },
  {
    label: "Wi-Fi",
    value: "Wi-Fi 6",
    benefit:
      "Kết nối không dây tốc độ cao và ổn định.",
  },
  {
    label: "Bluetooth",
    value: "5.4",
    benefit:
      "Kết nối phụ kiện và thiết bị ngoại vi linh hoạt.",
  },
  {
    label: "Cổng kết nối",
    value: "HDMI In, USB 3.0, Type-C, RJ45",
    benefit:
      "Đầy đủ cổng kết nối cho thiết bị ngoại vi và mạng có dây.",
  },
  {
    label: "Độ sáng",
    value: "350 nits",
    benefit:
      "Hiển thị rõ trong môi trường văn phòng và sảnh.",
  },
  {
    label: "Tỷ lệ tương phản",
    value: "1200:1",
    benefit:
      "Màu sắc sâu và phân biệt rõ giữa các vùng hiển thị.",
  },
  {
    label: "Góc nhìn",
    value: "178 độ",
    benefit:
      "Nội dung dễ quan sát từ nhiều vị trí trong không gian.",
  },
  {
    label: "Công suất",
    value: "60W",
    benefit:
      "Vận hành tiết kiệm năng lượng cho hoạt động liên tục.",
  },
  {
    label: "Tuổi thọ màn hình",
    value: "50.000 giờ",
    benefit:
      "Đáp ứng nhu cầu vận hành liên tục tại điểm kinh doanh.",
  },
  {
    label: "Quản lý nội dung",
    value: "CMS Cloud",
    benefit:
      "Cập nhật từ xa và phát nội dung ngoại tuyến.",
  },
];

// =========================================================================
// SO SÁNH POSTER VÀ DIGITAL SIGNAGE
// =========================================================================
export const comparison = {
  headline: "Từ poster tĩnh đến truyền thông linh hoạt.",
  rows: [
    {
      criterion: "Cập nhật nội dung",
      poster: "Phải in lại theo từng chương trình",
      digital: "Cập nhật từ xa qua CMS Cloud",
    },
    {
      criterion: "Đồng bộ nhiều điểm",
      poster: "Khó kiểm soát giữa các chi nhánh",
      digital: "Một tài khoản quản lý nhiều thiết bị",
    },
    {
      criterion: "Định dạng hiển thị",
      poster: "Chỉ hiển thị nội dung tĩnh",
      digital: "Hình ảnh và video chất lượng 4K",
    },
    {
      criterion: "Tần suất thay đổi",
      poster: "Phụ thuộc vật tư in ấn và nhân sự",
      digital: "Chủ động theo chiến dịch và thời điểm",
    },
    {
      criterion: "Chi phí dài hạn",
      poster: "Phát sinh lặp lại theo đợt truyền thông",
      digital: "Tái sử dụng thiết bị cho nhiều mục đích",
    },
    {
      criterion: "Trải nghiệm thương hiệu",
      poster: "Hình ảnh tĩnh, dễ lỗi thời",
      digital: "Nhất quán, hiện đại và cập nhật liên tục",
    },
  ] satisfies ComparisonRow[],
};

// =========================================================================
// DÙNG THỬ 7 NGÀY
// =========================================================================
export const trial = {
  headline: "Trải nghiệm Hushida trong 7 ngày trước khi quyết định",
  description:
    "Đăng ký demo để trực tiếp trải nghiệm chất lượng hiển thị, khả năng quản lý nội dung từ xa và mức độ phù hợp với không gian thực tế.",
  points: [
    "Demo miễn phí tại TP.HCM và Bình Dương",
    "Hỗ trợ giao và lắp đặt thiết bị",
    "Miễn phí thiết lập nội dung ban đầu",
    "Hướng dẫn sử dụng CMS Cloud",
    "Hỗ trợ trong quá trình trải nghiệm",
  ],
  note: "SHT sẽ liên hệ tư vấn trong thời gian sớm nhất.",
  primaryCta: { label: "Đăng ký demo miễn phí", href: "#dang-ky-demo" },
  secondaryCta: { label: "Đặt lịch demo", href: "#dang-ky-demo" },
};

// =========================================================================
// QUY TRÌNH TRIỂN KHAI
// =========================================================================
export const deploymentSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận nhu cầu",
    description:
      "Tìm hiểu không gian, mục tiêu sử dụng và số lượng thiết bị dự kiến.",
  },
  {
    step: 2,
    title: "Demo và đề xuất giải pháp",
    description:
      "Trình diễn thiết bị, CMS Cloud và tư vấn phương án phù hợp.",
  },
  {
    step: 3,
    title: "Giao hàng, lắp đặt và cài đặt",
    description:
      "Lắp đặt thiết bị, cấu hình hệ thống và hỗ trợ nội dung ban đầu.",
  },
  {
    step: 4,
    title: "Nghiệm thu và hỗ trợ vận hành",
    description:
      "Hướng dẫn sử dụng CMS, bàn giao và hỗ trợ trong quá trình sử dụng.",
  },
];

// =========================================================================
// FAQ — 16 câu hỏi theo spec
// =========================================================================
export const faqs: FaqItem[] = [
  {
    question: "CMS Cloud có mất phí không?",
    answer:
      "CMS Cloud miễn phí theo chính sách hiện tại của SHT. Vui lòng liên hệ để biết chi tiết chính sách đang áp dụng.",
  },
  {
    question: "Một tài khoản có thể quản lý nhiều thiết bị không?",
    answer:
      "Một tài khoản có thể quản lý nhiều thiết bị. Liên hệ SHT để xác nhận cấu hình phù hợp cho doanh nghiệp.",
  },
  {
    question: "Khi mất Internet, màn hình có tiếp tục phát nội dung không?",
    answer:
      "Có. Thiết bị hỗ trợ phát nội dung ngoại tuyến — nội dung đã tải sẽ tiếp tục phát khi mất kết nối Internet.",
  },
  {
    question: "Standee Hushida có phải màn hình cảm ứng không?",
    answer:
      "Không. Hushida Digital Standee 50 inch không phải màn hình cảm ứng. Nội dung được vận hành hoàn toàn từ xa qua CMS Cloud.",
  },
  {
    question: "Sản phẩm được bảo hành trong bao lâu?",
    answer:
      "SHT áp dụng chính sách bảo hành 12 tháng cho thiết bị.",
  },
  {
    question: "SHT có chương trình dùng thử 7 ngày không?",
    answer:
      "Có. SHT hỗ trợ dùng thử miễn phí 7 ngày tại Thành phố Hồ Chí Minh và Bình Dương, áp dụng theo lịch thiết bị và điều kiện chương trình.",
  },
  {
    question: "SHT có hỗ trợ lắp đặt và cài đặt nội dung ban đầu không?",
    answer:
      "Có. SHT hỗ trợ giao hàng, lắp đặt và cài nội dung ban đầu miễn phí. Đội ngũ kỹ thuật hướng dẫn vận hành CMS.",
  },
  {
    question: "Giải pháp có phù hợp để triển khai tại nhiều chi nhánh không?",
    answer:
      "Có. Một tài khoản CMS có thể quản lý nhiều thiết bị, phù hợp cho hệ thống chuỗi và nhiều chi nhánh.",
  },
];

// =========================================================================
// BIỂU MẪU THU LEAD
// =========================================================================
export const leadForm: LeadFormContent = {
  headline: "Đăng ký demo miễn phí",
  description:
    "Để lại thông tin để trực tiếp trải nghiệm chất lượng hiển thị và khả năng quản lý nội dung từ xa của Hushida.",
  fields: {
    name: "Họ và tên",
    phone: "Số điện thoại",
    company: "Doanh nghiệp",
    region: "Khu vực",
    need: "Nhu cầu tư vấn",
    quantity: "Số lượng dự kiến",
    note: "Ghi chú",
    consent: "Đồng ý liên hệ",
  },
  placeholders: {
    name: "Nguyễn Văn A",
    phone: "0900 000 000",
    company: "Tên doanh nghiệp",
    region: "TP. Hồ Chí Minh",
    quantity: "Ví dụ: 5 màn hình",
    note: "Mô tả ngắn về nhu cầu",
  },
  needs: [
    { value: "demo", label: "Đăng ký demo" },
    { value: "trial", label: "Dùng thử 7 ngày" },
    { value: "quote", label: "Nhận báo giá" },
    { value: "chain", label: "Tư vấn triển khai chuỗi" },
  ],
  consentText:
    "Bằng việc gửi thông tin, anh/chị đồng ý để SHT liên hệ tư vấn về giải pháp phù hợp.",
  submitLabel: "Đăng ký demo miễn phí",
  loadingLabel: "Đang gửi thông tin...",
  successMessage:
    "SHT đã nhận được yêu cầu. Đội ngũ tư vấn sẽ liên hệ với anh/chị trong thời gian sớm nhất.",
  errorMessage:
    "Chưa thể gửi thông tin. Vui lòng thử lại hoặc liên hệ trực tiếp với SHT.",
  errors: {
    name: "Vui lòng nhập họ và tên.",
    phone: "Vui lòng nhập số điện thoại hợp lệ.",
    company: "Vui lòng nhập tên doanh nghiệp.",
    need: "Vui lòng chọn nhu cầu tư vấn.",
    consent: "Vui lòng đồng ý để SHT liên hệ.",
  },
};

// =========================================================================
// FOOTER
// =========================================================================
export const footer = {
  description:
    "Giải pháp Digital Signage giúp doanh nghiệp trình chiếu, quản lý và đồng bộ nội dung từ xa.",
  quickLinks: [
    { label: "Giải pháp", href: "#cms" },
    { label: "Ứng dụng", href: "#industries" },
    { label: "Thông số", href: "#product" },
    { label: "Dự án thực tế", href: "#proof" },
    { label: "FAQ", href: "#faq" },
    { label: "Đăng ký demo", href: "#dang-ky-demo" },
  ],
  cta: {
    title: "Sẵn sàng nâng cấp không gian truyền thông?",
    button: "Đăng ký demo miễn phí",
    href: "#dang-ky-demo",
  },
  copyright: `© ${new Date().getFullYear()} SHT Technology. All rights reserved.`,
};

// =========================================================================
// SEO
// =========================================================================
export const seo = {
  title:
    "Hushida Digital Standee 50 inch | Giải pháp màn hình truyền thông số SHT",
  description:
    "Giải pháp Hushida Digital Standee 50 inch với màn hình 4K, Android 14 và CMS Cloud giúp doanh nghiệp cập nhật nội dung từ xa, đồng bộ nhiều điểm hiển thị và nâng cấp hình ảnh thương hiệu.",
  keywords: [
    "màn hình quảng cáo đứng",
    "standee điện tử",
    "màn hình quảng cáo 50 inch",
    "digital signage",
    "màn hình truyền thông số",
    "CMS quản lý màn hình từ xa",
  ],
};