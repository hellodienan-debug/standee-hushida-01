import type {
  AnnouncementContent,
  CaseStudy,
  ComparisonRow,
  FaqItem,
  GalleryContent,
  Industry,
  LeadFormContent,
  Metric,
  NavItem,
  ProblemItem,
  ProcessStep,
  ServiceItem,
  SolutionStep,
  Spec,
  UseCase,
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
  href: "#trial",
  cta: "Xem điều kiện chương trình",
};

// =========================================================================
// HEADER
// =========================================================================
export const navigation: NavItem[] = [
  { label: "Giải pháp", href: "#solutions" },
  { label: "CMS Cloud", href: "#cms" },
  { label: "Ứng dụng", href: "#industries" },
  { label: "Thông số", href: "#product" },
  { label: "Dự án thực tế", href: "#proof" },
  { label: "Câu hỏi thường gặp", href: "#faq" },
];

// =========================================================================
// HERO
// =========================================================================
export const hero = {
  eyebrow: "Giải pháp truyền thông số cho doanh nghiệp",
  title: "Biến mỗi không gian thành một điểm chạm thương hiệu số.",
  description:
    "Trình chiếu nội dung 4K sống động, cập nhật từ xa qua CMS Cloud và đồng bộ truyền thông trên nhiều thiết bị với Hushida Digital Standee 50 inch.",
  primaryCta: { label: "Đăng ký dùng thử 7 ngày", href: "#trial" },
  secondaryCta: { label: "Nhận tư vấn và báo giá", href: "#lead-form" },
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
      "Hiển thị ưu đãi, thông báo và nội dung thương hiệu tại sảnh giao dịch.",
    icon: "bank",
  },
  {
    name: "Showroom",
    description:
      "Trình chiếu sản phẩm, chương trình bán hàng và video trải nghiệm.",
    icon: "car",
  },
  {
    name: "Bán lẻ",
    description:
      "Đồng bộ thông điệp khuyến mãi tại nhiều điểm bán.",
    icon: "shopping-bag",
  },
  {
    name: "Y tế",
    description:
      "Hướng dẫn, thông báo và nội dung truyền thông tại khu vực tiếp đón.",
    icon: "heart-pulse",
  },
  {
    name: "Khách sạn",
    description:
      "Giới thiệu dịch vụ, sự kiện và hướng dẫn khách tại sảnh.",
    icon: "hotel",
  },
  {
    name: "Giáo dục",
    description:
      "Truyền tải thông báo, lịch học và nội dung sự kiện.",
    icon: "graduation-cap",
  },
  {
    name: "Văn phòng",
    description:
      "Truyền thông nội bộ và nâng cấp hình ảnh khu vực lễ tân.",
    icon: "building",
  },
  {
    name: "Bất động sản",
    description:
      "Trình chiếu dự án, mặt bằng và nội dung tư vấn.",
    icon: "home",
  },
];

// =========================================================================
// VẤN ĐỀ CỦA TRUYỀN THỐNG
// =========================================================================
export const problem = {
  headline:
    "Poster thay đổi liên tục. Quy trình cập nhật vẫn còn thủ công.",
  description:
    "Nhiều doanh nghiệp vẫn phụ thuộc vào in ấn, treo poster và thay bảng nội bộ theo từng chương trình. Hệ quả là chi phí lặp lại, thông điệp thiếu đồng bộ và mất thời gian vận hành.",
  items: [
    {
      title: "Mỗi chiến dịch phải in lại",
      description:
        "Chi phí in ấn, thiết kế và vật tư phát sinh theo từng đợt.",
    },
    {
      title: "Nội dung giữa các chi nhánh thiếu đồng bộ",
      description:
        "Mỗi điểm áp dụng thời điểm khác nhau, hình ảnh thương hiệu không nhất quán.",
    },
    {
      title: "Thay poster tốn thời gian",
      description:
        "Nhân sự phải di chuyển giữa các điểm và thao tác thủ công.",
    },
    {
      title: "Thông tin dễ lỗi thời",
      description:
        "Bảng nội dung cập nhật chậm, không theo kịp chương trình.",
    },
    {
      title: "Hình ảnh tĩnh khó thu hút",
      description:
        "Không thể hiện được thông điệp động, không tạo điểm nhấn tại không gian.",
    },
    {
      title: "Chi phí lặp lại theo từng chương trình",
      description:
        "Mỗi đợt truyền thông phát sinh đầu mục chi phí mới.",
    },
  ] satisfies ProblemItem[],
};

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
// GIẢI PHÁP
// =========================================================================
export const solution = {
  headline:
    "Một nền tảng. Nhiều điểm hiển thị. Một trải nghiệm thương hiệu thống nhất.",
  description:
    "Hushida Digital Signage kết hợp phần cứng chuyên dụng với CMS Cloud để doanh nghiệp quản lý mọi điểm chạm truyền thông từ một nơi.",
  steps: [
    {
      step: 1,
      title: "Tải nội dung lên CMS",
      description: "Hình ảnh, video hoặc bố cục theo chiến dịch.",
    },
    {
      step: 2,
      title: "Chọn thiết bị",
      description: "Một hoặc nhiều màn hình theo chi nhánh.",
    },
    {
      step: 3,
      title: "Sắp xếp lịch phát",
      description: "Theo khung giờ, theo ngày hoặc theo chương trình.",
    },
    {
      step: 4,
      title: "Cập nhật từ xa",
      description:
        "Thay đổi nội dung mà không cần đến điểm lắp đặt.",
    },
    {
      step: 5,
      title: "Hiển thị tại điểm kinh doanh",
      description:
        "Standee phát nội dung đồng bộ theo đúng kế hoạch.",
    },
  ] satisfies SolutionStep[],
  benefits: [
    "Không cần thay poster thủ công",
    "Dễ đồng bộ nhiều địa điểm",
    "Phù hợp hình ảnh và video",
    "Chủ động theo chiến dịch",
    "Có thể phát ngoại tuyến",
    "Hỗ trợ chia bố cục màn hình",
  ],
};

// =========================================================================
// CMS CLOUD — Section trọng tâm, nền tối
// =========================================================================
export const cmsCloud = {
  headline: "Quản lý nội dung từ một nơi.",
  description:
    "Tải lên hình ảnh hoặc video, chọn thiết bị, sắp xếp bố cục và cập nhật nội dung từ xa qua CMS Cloud.",
  features: [
    {
      title: "Quản lý nhiều thiết bị",
      description:
        "Một tài khoản có thể được sử dụng để quản lý nhiều thiết bị.",
    },
    {
      title: "Cập nhật từ xa",
      description:
        "Thay đổi nội dung theo thời gian thực từ bất kỳ đâu có kết nối Internet.",
    },
    {
      title: "Hình ảnh và video",
      description: "Hỗ trợ nhiều định dạng nội dung phổ biến.",
    },
    {
      title: "Chia bố cục màn hình",
      description:
        "Hiển thị đồng thời nhiều vùng nội dung trong cùng một màn hình.",
    },
    {
      title: "Phát nội dung ngoại tuyến",
      description:
        "Nội dung đã tải vẫn có thể tiếp tục phát khi kết nối mạng bị gián đoạn.",
    },
    {
      title: "Hỗ trợ nhiều ngôn ngữ",
      description: "Phù hợp doanh nghiệp vận hành đa ngôn ngữ.",
    },
    {
      title: "CMS miễn phí theo chính sách hiện tại",
      description:
        "Không phát sinh chi phí CMS theo chính sách hiện hành.",
    },
  ],
};

// =========================================================================
// LỢI ÍCH KINH DOANH
// =========================================================================
export const businessBenefits = {
  headline:
    "Giá trị không nằm ở chiếc màn hình. Giá trị nằm ở cách doanh nghiệp vận hành nội dung.",
  description:
    "Mỗi doanh nghiệp đều có nội dung cần truyền tải. Vấn đề là nội dung đó đến đúng nơi, đúng lúc và đúng cách.",
  groups: [
    {
      title: "Thương hiệu",
      items: [
        "Hình ảnh chuyên nghiệp và nhất quán hơn tại mọi điểm chạm.",
        "Không gian hiện đại, nâng cấp trải nghiệm khách hàng.",
        "Truyền tải thông điệp chuẩn theo nhận diện thương hiệu.",
      ],
    },
    {
      title: "Vận hành",
      items: [
        "Giảm phụ thuộc vào in ấn và thao tác thủ công.",
        "Rút ngắn thời gian cập nhật nội dung.",
        "Quản lý tập trung nhiều chi nhánh.",
      ],
    },
    {
      title: "Trải nghiệm",
      items: [
        "Tạo điểm nhấn ngay tại khu vực lễ tân và điểm bán.",
        "Tái sử dụng thiết bị cho nhiều mục đích.",
        "Chủ động theo chiến dịch và sự kiện.",
      ],
    },
  ],
};

// =========================================================================
// KỊCH BẢN SỬ DỤNG
// =========================================================================
export const useCases: UseCase[] = [
  {
    title: "Khu vực lễ tân",
    description:
      "Tạo ấn tượng đầu tiên với thông điệp thương hiệu nhất quán.",
  },
  {
    title: "Sảnh giao dịch",
    description:
      "Hiển thị thông báo, sản phẩm và chương trình đang triển khai.",
  },
  {
    title: "Showroom",
    description:
      "Trình chiếu video sản phẩm và câu chuyện thương hiệu.",
  },
  {
    title: "Điểm bán",
    description:
      "Đồng bộ chương trình khuyến mãi theo từng thời điểm.",
  },
  {
    title: "Phòng chờ",
    description:
      "Biến thời gian chờ thành trải nghiệm thương hiệu.",
  },
  {
    title: "Sự kiện",
    description:
      "Phông nền số linh hoạt cho chương trình và hội nghị.",
  },
  {
    title: "Hội nghị",
    description:
      "Hiển thị lịch trình, thông tin diễn giả và nội dung sự kiện.",
  },
  {
    title: "Truyền thông nội bộ",
    description:
      "Cập nhật thông báo nội bộ cho đội ngũ tại văn phòng và nhà máy.",
  },
];

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
// DỰ ÁN THỰC TẾ — Placeholder, không bịa số liệu
// =========================================================================
export const caseStudies: CaseStudy[] = [
  {
    industry: "Ngân hàng",
    context:
      "Sảnh giao dịch tại khu vực thành thị với lưu lượng khách lớn mỗi ngày.",
    need:
      "Truyền tải thông điệp thương hiệu và thông báo chương trình ưu đãi.",
    solution:
      "Triển khai Standee 50 inch tại khu vực lễ tân và sảnh chờ.",
    value:
      "Cập nhật nội dung nhanh chóng, giảm phụ thuộc vào bảng in và tờ rơi.",
    disclaimer:
      "Kịch bản tham khảo — sẽ thay bằng case study đã xác nhận.",
  },
  {
    industry: "Bán lẻ",
    context: "Chuỗi điểm bán trên nhiều khu vực với nhiều chương trình cùng lúc.",
    need: "Đồng bộ chương trình khuyến mãi giữa các cửa hàng.",
    solution:
      "Quản lý tập trung qua CMS Cloud cho hệ thống cửa hàng.",
    value:
      "Đồng bộ thông điệp và giảm thời gian cập nhật thủ công.",
    disclaimer:
      "Kịch bản tham khảo — sẽ thay bằng case study đã xác nhận.",
  },
  {
    industry: "Văn phòng",
    context:
      "Khu vực lễ tân và sảnh chờ tại toà nhà văn phòng hạng A.",
    need: "Nâng cấp hình ảnh và truyền thông nội bộ.",
    solution:
      "Triển khai Standee 50 inch tại hai khu vực trọng yếu.",
    value:
      "Không gian chuyên nghiệp hơn và thông điệp được kiểm soát tập trung.",
    disclaimer:
      "Kịch bản tham khảo — sẽ thay bằng case study đã xác nhận.",
  },
];

// =========================================================================
// DÙNG THỬ 7 NGÀY
// =========================================================================
export const trial = {
  headline: "Trải nghiệm trong 7 ngày trước khi quyết định.",
  description:
    "SHT hỗ trợ dùng thử tại Thành phố Hồ Chí Minh và Bình Dương. Đội ngũ kỹ thuật hỗ trợ cài đặt nội dung ban đầu và hướng dẫn sử dụng CMS.",
  points: [
    "Dùng thử miễn phí 7 ngày",
    "Demo tại Thành phố Hồ Chí Minh và Bình Dương",
    "Hỗ trợ cài nội dung ban đầu",
    "Hướng dẫn sử dụng CMS",
  ],
  note: "Áp dụng theo lịch thiết bị demo và điều kiện chương trình.",
  primaryCta: { label: "Đăng ký dùng thử", href: "#lead-form" },
  secondaryCta: { label: "Đặt lịch demo", href: "#lead-form" },
};

// =========================================================================
// DỊCH VỤ SHT
// =========================================================================
export const services: ServiceItem[] = [
  {
    title: "Tư vấn giải pháp",
    description: "Khảo sát nhu cầu và đề xuất cấu hình phù hợp.",
  },
  {
    title: "Demo thiết bị",
    description:
      "Trình diễn tại Thành phố Hồ Chí Minh và Bình Dương theo lịch thiết bị.",
  },
  {
    title: "Giao hàng",
    description: "Giao hàng tiêu chuẩn từ 1 đến 2 ngày làm việc.",
  },
  {
    title: "Lắp đặt",
    description: "Hỗ trợ lắp đặt tại điểm kinh doanh.",
  },
  {
    title: "Cài nội dung ban đầu",
    description: "Thiết lập nội dung trình chiếu ban đầu miễn phí.",
  },
  {
    title: "Hướng dẫn sử dụng CMS",
    description: "Đào tạo vận hành cho đội ngũ doanh nghiệp.",
  },
  {
    title: "Bảo hành 12 tháng",
    description: "Bảo hành chính hãng theo chính sách SHT.",
  },
  {
    title: "Đổi mới trong 7 ngày đầu",
    description:
      "Đổi mới nếu thiết bị phát sinh lỗi được xác nhận trong 7 ngày đầu.",
  },
  {
    title: "Hỗ trợ kỹ thuật",
    description: "Đồng hành trong suốt quá trình vận hành.",
  },
];

// =========================================================================
// QUY TRÌNH TRIỂN KHAI
// =========================================================================
export const deploymentSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Đăng ký tư vấn",
    description: "Gửi nhu cầu để đội ngũ SHT liên hệ trao đổi.",
  },
  {
    step: 2,
    title: "Xác định nhu cầu",
    description:
      "Khảo sát mặt bằng, điểm lắp đặt và mục tiêu truyền thông.",
  },
  {
    step: 3,
    title: "Demo hoặc khảo sát",
    description: "Trình diễn thiết bị và đề xuất giải pháp phù hợp.",
  },
  {
    step: 4,
    title: "Xác nhận giải pháp và báo giá",
    description: "Thống nhất phương án và gửi báo giá chi tiết.",
  },
  {
    step: 5,
    title: "Giao hàng, lắp đặt",
    description: "Vận chuyển và lắp đặt tại điểm kinh doanh.",
  },
  {
    step: 6,
    title: "Cài nội dung và hướng dẫn",
    description: "Thiết lập nội dung ban đầu và đào tạo vận hành.",
  },
  {
    step: 7,
    title: "Nghiệm thu",
    description: "Nghiệm thu thiết bị và xác nhận hệ thống vận hành.",
  },
  {
    step: 8,
    title: "Hỗ trợ sau bán hàng",
    description: "Đồng hành trong suốt quá trình vận hành và bảo hành.",
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
    question: "Một tài khoản có thể dùng trên nhiều thiết bị không?",
    answer:
      "Một tài khoản đã được sử dụng thực tế để quản lý nhiều thiết bị. Vui lòng trao đổi với SHT để xác nhận cấu hình phù hợp cho doanh nghiệp.",
  },
  {
    question: "Có cần Internet liên tục không?",
    answer:
      "Thiết bị hỗ trợ kết nối Wi-Fi 6 và RJ45. Để cập nhật nội dung từ xa, cần có kết nối Internet ổn định.",
  },
  {
    question: "Mất Internet có phát nội dung được không?",
    answer:
      "Có. Thiết bị hỗ trợ phát nội dung ngoại tuyến — nội dung đã được tải về sẽ tiếp tục phát khi mất kết nối Internet.",
  },
  {
    question: "Có phát được hình ảnh và video không?",
    answer:
      "Có. CMS Cloud hỗ trợ nhiều định dạng hình ảnh và video phổ biến, phù hợp cho nội dung thương hiệu.",
  },
  {
    question: "Có hỗ trợ chia màn hình không?",
    answer:
      "Có. Thiết bị hỗ trợ chia bố cục màn hình, cho phép hiển thị nhiều vùng nội dung trong cùng một màn hình.",
  },
  {
    question: "Đây có phải màn hình cảm ứng không?",
    answer:
      "Hushida Digital Standee 50 inch không phải màn hình cảm ứng. Nội dung được vận hành hoàn toàn từ xa qua CMS Cloud.",
  },
  {
    question: "Có camera và micro không?",
    answer:
      "Sản phẩm không tích hợp camera và micro, phù hợp với mục tiêu trình chiếu nội dung thương hiệu.",
  },
  {
    question: "SHT có hỗ trợ cài nội dung ban đầu không?",
    answer:
      "Có. SHT hỗ trợ cài đặt nội dung ban đầu miễn phí và hướng dẫn đội ngũ doanh nghiệp vận hành CMS.",
  },
  {
    question: "Giao hàng mất bao lâu?",
    answer: "Giao hàng tiêu chuẩn từ 1 đến 2 ngày làm việc.",
  },
  {
    question: "Bảo hành bao lâu?",
    answer:
      "SHT áp dụng chính sách bảo hành 12 tháng cho thiết bị.",
  },
  {
    question: "Chính sách lỗi 7 ngày như thế nào?",
    answer:
      "SHT đổi mới nếu thiết bị phát sinh lỗi được xác nhận trong 7 ngày đầu sử dụng.",
  },
  {
    question: "Có dùng thử không?",
    answer:
      "Có. SHT hỗ trợ dùng thử miễn phí 7 ngày tại Thành phố Hồ Chí Minh và Bình Dương, áp dụng theo lịch thiết bị và điều kiện chương trình.",
  },
  {
    question: "Demo ở khu vực nào?",
    answer:
      "SHT hỗ trợ demo miễn phí tại Thành phố Hồ Chí Minh và Bình Dương.",
  },
  {
    question: "Phù hợp với những ngành nào?",
    answer:
      "Sản phẩm phù hợp với ngân hàng, bán lẻ, showroom, khách sạn, y tế, giáo dục, văn phòng và nhiều mô hình doanh nghiệp khác.",
  },
  {
    question: "Có thể triển khai cho nhiều chi nhánh không?",
    answer:
      "Có. Một tài khoản có thể quản lý nhiều thiết bị, phù hợp cho hệ thống chuỗi và nhiều chi nhánh.",
  },
];

// =========================================================================
// BIỂU MẪU THU LEAD
// =========================================================================
export const leadForm: LeadFormContent = {
  headline: "Nhận tư vấn và báo giá từ SHT",
  description:
    "Để lại thông tin, đội ngũ SHT sẽ liên hệ tư vấn giải pháp phù hợp với nhu cầu của doanh nghiệp.",
  fields: {
    name: "Họ và tên",
    phone: "Số điện thoại",
    company: "Tên doanh nghiệp",
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
  submitLabel: "Gửi yêu cầu",
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
// CTA CUỐI TRANG
// =========================================================================
export const finalCta = {
  headline:
    "Sẵn sàng nâng cấp cách doanh nghiệp truyền tải nội dung?",
  description:
    "Đăng ký demo để trải nghiệm Hushida Digital Standee và nhận tư vấn giải pháp phù hợp với không gian của doanh nghiệp.",
  primaryCta: { label: "Đăng ký demo", href: "#lead-form" },
  secondaryCta: { label: "Nhận báo giá", href: "#lead-form" },
  phoneCta: {
    label: "Gọi tư vấn",
    href: siteConfig.phoneHref,
  },
};

// =========================================================================
// FOOTER
// =========================================================================
export const footer = {
  description:
    "Giải pháp Digital Signage giúp doanh nghiệp trình chiếu, quản lý và đồng bộ nội dung từ xa.",
  quickLinks: [
    { label: "Giải pháp", href: "#solutions" },
    { label: "CMS Cloud", href: "#cms" },
    { label: "Ứng dụng", href: "#industries" },
    { label: "Thông số", href: "#product" },
    { label: "Dự án thực tế", href: "#proof" },
    { label: "Câu hỏi thường gặp", href: "#faq" },
  ],
  cta: {
    title: "Sẵn sàng nâng cấp không gian truyền thông?",
    button: "Đăng ký demo miễn phí",
    href: "#lead-form",
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