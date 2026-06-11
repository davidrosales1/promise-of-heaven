export type NavLink = {
  href: string;
  label: string;
};

export type Interview = {
  title: string;
  thumb: string;
  video: string;
};

export type Resource = {
  image: string;
  title: string;
  description: string;
  cta: string;
};

export type ConnectedItem = {
  label: string;
  description: string;
  icon: string;
};

export const navLinks: NavLink[] = [
  { href: "#book", label: "Book" },
  { href: "#concert", label: "Concert" },
  { href: "#interviews", label: "Interviews" },
  { href: "#resources", label: "Resources" },
  { href: "#support", label: "Support" },
];

export const interviews: Interview[] = [
  {
    title: "Message & Ministry",
    thumb:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/thumbnail-Message-and-Ministry.jpg",
    video:
      "https://d2vftoccbq8rr6.cloudfront.net/video/television/2025/2025_POH/DrJ_DMJ_Cut%208/DrJ_DMJ_Cut%208_1080p.mp4?jobid=1755794973426-704xe7",
  },
  {
    title: "James Brown Interview",
    thumb:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/thumbnail-James-Brown.jpg",
    video:
      "https://d2vftoccbq8rr6.cloudfront.net/video/television/2025/2025_POH/POH_TS_JamesBrownInterview%20V1%20FINAL/POH_TS_JamesBrownInterview%20V1%20FINAL_1080p.mp4?jobid=1755026078937-55l4gv",
  },
  {
    title: "Sheila Walsh Interview",
    thumb:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/thumbnail-Sheila-Walsh.jpg",
    video:
      "https://d2vftoccbq8rr6.cloudfront.net/video/television/E_Product/POH_Prod_Mstr/POHINTDV/POHINTDV_1080p.mp4?jobid=1754934653122-afauy9",
  },
  {
    title: "Lauren Green Interview",
    thumb:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/thumbnail-Lauren-Green.jpg",
    video:
      "https://d2vftoccbq8rr6.cloudfront.net/video/television/2025/2025_POH/POH_TS_LaurenGreenInterview%20Web.Copy.02/POH_TS_LaurenGreenInterview%20Web.Copy.02_1080p.mp4?jobID=1760739014085-uu1zx4",
  },
  {
    title: "Rapid Fire Q & A",
    thumb:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/thumbnail-Rapid-Fire.jpg",
    video:
      "https://d2vftoccbq8rr6.cloudfront.net/video/television/2025/2025_POH/DrJ_Rapid_Fire/Dr%20J%20Rapid%20Fire%20v5_1/Dr%20J%20Rapid%20Fire%20v5_1_1080p.mp4?jobid=1757531551367-p1kvzj",
  },
  {
    title: "PASSAGES for Young Adults",
    thumb:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/thumbnail-Passages-Social.jpg",
    video:
      "https://d2vftoccbq8rr6.cloudfront.net/video/television/2025/2025_POH/Passages_Pod-24%20-%20Dr.%20J_FINAL/Passages_Pod-24%20-%20Dr.%20J_FINAL_1080p.mp4?jobID=1756785543591-w2hd20",
  },
];

export const resources: Resource[] = [
  {
    image:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-Outreach-Kit.png",
    title: "The Promise of Heaven Outreach Kit",
    description:
      "This downloadable collection contains everything that a small group or church community needs to get excited about heaven, including guided videos, a quick-start leader’s guide, a participant’s guide, and commercial-free streaming of Dr. Jeremiah’s messages.",
    cta: "Learn More",
  },
  {
    image:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-10Things-Bkmk.png",
    title: "10 Things You May Not Know About Heaven",
    description: "Discover more about heaven with this free resource.",
    cta: "Request Now",
  },
  {
    image:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-YGTP.png",
    title: "Your Greatest Turning Point",
    description:
      "Take the next step in your journey of answering, 'How do I get to heaven?' by diving into Your Greatest Turning Point",
    cta: "Request Now",
  },
];

export const connectedItems: ConnectedItem[] = [
  {
    label: "Subscribe",
    description: "Daily e-devotional",
    icon: "M3 5h18M3 12h18M3 19h12",
  },
  {
    label: "Download",
    description: "Mobile app",
    icon: "M12 3v12m0 0l-4-4m4 4l4-4M5 21h14",
  },
  {
    label: "Find",
    description: "Radio & TV airings",
    icon: "M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z",
  },
  {
    label: "Follow",
    description: "On social media",
    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  },
  {
    label: "Visit",
    description: "BibleStrong.org & more",
    icon: "M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12a9 9 0 0 1 18 0M3 12a9 9 0 0 0 18 0",
  },
];
