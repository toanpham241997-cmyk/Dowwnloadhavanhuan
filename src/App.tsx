import { useState, useRef } from "react";
import "./App.css";

const IMAGE_DOWNLOAD_LINK = "https://example.com/download-image";
const VIDEO_DOWNLOAD_LINK = "https://example.com/download-video";

function SpinningDownloadBtn({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`spin-btn-wrapper ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="spin-ring spin-ring-1"></span>
      <span className="spin-ring spin-ring-2"></span>
      <span className="spin-ring spin-ring-3"></span>
      <span className="spin-btn-inner">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="spin-icon"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span className="spin-label">{label}</span>
      </span>
    </a>
  );
}

function ImageFrame() {
  return (
    <section className="section image-section">
      <div className="section-title-wrap">
        <span className="section-badge">HÌnh Ảnh</span>
        <h2 className="section-title">Bộ Sưu Tập Ảnh</h2>
        <div className="title-underline"></div>
      </div>
      <div className="image-frame-outer">
        <div className="image-frame-glow"></div>
        <div className="image-frame">
          <div className="image-frame-corner tl"></div>
          <div className="image-frame-corner tr"></div>
          <div className="image-frame-corner bl"></div>
          <div className="image-frame-corner br"></div>
          <div className="image-placeholder">
            <div className="image-placeholder-inner">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c0a060"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="placeholder-icon"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="placeholder-text">Hình Ảnh Hà Văn Huấn</p>
              <p className="placeholder-sub">Kích thước đề xuất: 1280 × 720px</p>
            </div>
          </div>
          <div className="image-frame-shine"></div>
        </div>
        <div className="download-btn-area">
          <SpinningDownloadBtn href={IMAGE_DOWNLOAD_LINK} label="TẢI XUỐNG ẢNH" />
        </div>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="section profile-section">
      <div className="section-title-wrap">
        <span className="section-badge">Tiểu Sử</span>
        <h2 className="section-title">Hà Văn Huấn</h2>
        <div className="title-underline"></div>
      </div>
      <div className="profile-card-outer">
        <div className="profile-glow"></div>
        <div className="profile-card">
          <div className="profile-avatar-wrap">
            <div className="profile-avatar">
              <span className="avatar-initials">HVH</span>
              <div className="avatar-ring ring-a"></div>
              <div className="avatar-ring ring-b"></div>
            </div>
          </div>
          <div className="profile-content">
            <h3 className="profile-name">Hà Văn Huấn</h3>
            <p className="profile-role">Nghệ Sĩ • Nhà Sáng Tạo • Người Truyền Cảm Hứng</p>
            <div className="profile-divider"></div>
            <div className="profile-bio">
              <p>
                <span className="bio-highlight">Hà Văn Huấn</span> là một cá nhân tài năng với niềm đam mê sáng tạo
                không ngừng nghỉ. Với phong cách độc đáo và cá tính riêng biệt, anh đã tạo dựng được một dấu ấn
                sâu sắc trong lòng người hâm mộ.
              </p>
              <p>
                Sinh ra và lớn lên tại Việt Nam, <span className="bio-highlight">Hà Văn Huấn</span> luôn mang trong
                mình nguồn năng lượng mạnh mẽ và sự nhiệt huyết cháy bỏng. Hành trình của anh là minh chứng sống
                động cho tinh thần không bao giờ bỏ cuộc, luôn vươn lên chinh phục những đỉnh cao mới.
              </p>
              <p>
                Với tư duy sáng tạo vượt trội và khả năng truyền cảm hứng đặc biệt, anh đã góp phần tạo nên
                những tác phẩm có giá trị và ý nghĩa sâu sắc với cộng đồng. <span className="bio-highlight">
                Hà Văn Huấn</span> — tên gọi gắn liền với đam mê, sáng tạo và sự cống hiến hết mình.
              </p>
            </div>
            <div className="profile-tags">
              <span className="profile-tag">✦ Sáng Tạo</span>
              <span className="profile-tag">✦ Đam Mê</span>
              <span className="profile-tag">✦ Truyền Cảm Hứng</span>
              <span className="profile-tag">✦ Tài Năng</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="section video-section">
      <div className="section-title-wrap">
        <span className="section-badge">Video</span>
        <h2 className="section-title">Khung Chiếu Video</h2>
        <div className="title-underline"></div>
      </div>
      <div className="video-frame-outer">
        <div className="video-frame-glow"></div>
        <div className="video-frame">
          <div className="video-frame-corner tl"></div>
          <div className="video-frame-corner tr"></div>
          <div className="video-frame-corner bl"></div>
          <div className="video-frame-corner br"></div>
          <div className="video-inner">
            <video
              ref={videoRef}
              className="video-el"
              onEnded={() => setPlaying(false)}
              src=""
              poster=""
            />
            <div className="video-overlay" onClick={togglePlay}>
              <div className={`play-btn-wrap ${playing ? "playing" : ""}`}>
                <div className="play-pulse pulse-a"></div>
                <div className="play-pulse pulse-b"></div>
                <button className="play-btn" aria-label="Play/Pause">
                  {playing ? (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="video-placeholder-text">Hà Văn Huấn — Video</p>
            </div>
          </div>
          <div className="video-frame-shine"></div>
        </div>
        <div className="download-btn-area">
          <SpinningDownloadBtn href={VIDEO_DOWNLOAD_LINK} label="TẢI XUỐNG VIDEO" />
        </div>
      </div>
    </section>
  );
}

function ParticlesBg() {
  return (
    <div className="particles-bg" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span key={i} className={`particle p-${i % 7}`} style={{ "--i": i } as React.CSSProperties}></span>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="app-root">
      <ParticlesBg />
      <div className="grid-bg" aria-hidden="true"></div>

      <header className="site-header">
        <div className="header-inner">
          <div className="header-logo">
            <span className="logo-glow">✦</span>
            <span className="logo-text">HÀ VĂN HUẤN</span>
            <span className="logo-glow">✦</span>
          </div>
          <div className="header-bar"></div>
        </div>
      </header>

      <main className="site-main">
        <div className="hero-area">
          <div className="hero-badge-row">
            <span className="hero-badge rotating-border">OFFICIAL SITE</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-line-1">HÀ VĂN</span>
            <span className="hero-line-2 gold-gradient">HUẤN</span>
          </h1>
          <p className="hero-sub">Nghệ sĩ • Sáng Tạo • Truyền Cảm Hứng</p>
          <div className="hero-decoration">
            <span className="deco-line"></span>
            <span className="deco-diamond">◆</span>
            <span className="deco-line"></span>
          </div>
        </div>

        <ImageFrame />
        <ProfileSection />
        <VideoFrame />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">✦ HÀ VĂN HUẤN ✦</div>
          <p className="footer-copy">© 2024 Hà Văn Huấn. All Rights Reserved.</p>
          <div className="footer-bar"></div>
        </div>
      </footer>
    </div>
  );
}
