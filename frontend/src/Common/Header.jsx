import React from 'react'

const Header = () => {
  return (
    <>
    <div className="circle-container">
    <svg className="circle-progress svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919', strokeDashoffset: '256.939'}}>
      </path>
    </svg>
  </div>
  <div className="sidebar-menu">
    <div className="mobile-logo-area d-flex justify-content-between align-items-center">
      <div className="header-logo">
        <a href="#"><img alt="image" className="img-fluid dark" src="../assets/image/index-img/icon/dark-logo.svg" /></a>
        <a href="#"><img alt="image" className="img-fluid light" src="../assets/image/index-img/icon/light-logo.svg" /></a>
      </div>
      <div className="menu-button menu-close-btn">
        <i className="bi bi-x" />
      </div>
    </div>
    <ul className="menu-list">
      <li><a href="/">BLOGS</a></li>
      <li className="menu-item-has-children">
        <a href="#" className="drop-down">POST FEATURES</a><i className="bi bi-plus dropdown-icon" />
        <ul className="sub-menu">
          <li><a href="#">About Us</a></li>
          <li>
            <a href="#">Post Format</a>
            <i className="bi bi-plus dropdown-icon" />
            <ul className="sub-menu">
              <li><a href="#">Standard Format</a></li>
              <li><a href="#">Gallery Format</a></li>
              <li><a href="#">Video Format</a></li>
              <li><a href="#">Audio Format</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Post Sidebar</a>
            <i className="bi bi-plus dropdown-icon" />
            <ul className="sub-menu">
              <li><a href="#">Full Width with sidebar</a></li>
              <li><a href="#">Full Width No sidebar</a></li>
              <li><a href="#">Classic with Sidebar</a></li>
              <li><a href="#">Vertical with Sidebar</a></li>
              <li><a href="#">Vertical with No Sidebar</a></li>
            </ul>
          </li>
          <li><a href="#">Editor Profile</a></li>
          <li><a href="#">Post Pagination</a></li>
          <li><a href="#">Only for subscriber</a></li>
          <li><a href="#">FAQ's </a></li>
          <li><a href="#">Terms &amp; Conditions </a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">404</a></li>
        </ul>
      </li>
      <li><a href="#">CONTACT</a></li>
    </ul>
    <div className="menu-bottom-content">
      <div className="subscribe-area">
        <h4>Subscribe Zorik To Get Free Update.</h4>
        <p>By subscribing, you'll get latest &amp; Featured blog post by email.</p>
        <a href="#" className="primary-btn hover-btn">SUBSCRIBE
          <svg className="arrow" width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" stroke="#191919" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>
      <div className="social-wrap">
        <h6>Follow Social Media</h6>
        <ul className="social-area">
          <li>
            <a href="https://www.facebook.com/">
              <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.81526 12.2483V7.46726H9.42818L9.66793 5.59534H7.81526V4.40301C7.81526 3.86284 7.96576 3.49301 8.74101 3.49301H9.72334V1.82409C9.24538 1.77287 8.76495 1.74814 8.28426 1.75001C6.85859 1.75001 5.87976 2.62034 5.87976 4.21809V5.59184H4.27734V7.46376H5.88326V12.2483H7.81526Z">
                </path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://x.com/">
              <svg width={12} height={12} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M11.025 0.65625H13.1722L8.48225 6.0305L14 13.3438H9.68012L6.2965 8.9075L2.42462 13.3438H0.2765L5.29287 7.595L0 0.65625H4.43013L7.48825 4.71012L11.025 0.65625ZM10.2725 12.0557H11.4625L3.78262 1.87687H2.50688L10.2725 12.0557Z">
                  </path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.90719 4.1972C3.61209 4.1972 4.18353 3.62576 4.18353 2.92086C4.18353 2.21597 3.61209 1.64453 2.90719 1.64453C2.20229 1.64453 1.63086 2.21597 1.63086 2.92086C1.63086 3.62576 2.20229 4.1972 2.90719 4.1972Z">
                </path>
                <path d="M5.38752 5.16523V12.2463H7.5861V8.74457C7.5861 7.82057 7.75994 6.92573 8.9056 6.92573C10.0355 6.92573 10.0495 7.98215 10.0495 8.8029V12.2469H12.2493V8.36365C12.2493 6.45615 11.8386 4.99023 9.60911 4.99023C8.53869 4.99023 7.82119 5.57765 7.52777 6.13357H7.49802V5.16523H5.38752ZM1.80469 5.16523H4.00677V12.2463H1.80469V5.16523Z">
                </path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2191 4.84492C12.2132 4.40312 12.1305 3.96571 11.9747 3.55226C11.8396 3.20351 11.6332 2.88679 11.3687 2.62233C11.1043 2.35786 10.7875 2.15147 10.4388 2.01634C10.0307 1.86313 9.59948 1.78029 9.16362 1.77134C8.60246 1.74626 8.42454 1.73926 7.00004 1.73926C5.57554 1.73926 5.39296 1.73926 4.83587 1.77134C4.40022 1.78036 3.96924 1.8632 3.56129 2.01634C3.21249 2.15138 2.89572 2.35773 2.63124 2.62221C2.36677 2.88669 2.16041 3.20346 2.02537 3.55226C1.87186 3.96008 1.7892 4.39116 1.78096 4.82684C1.75587 5.38859 1.74829 5.56651 1.74829 6.99101C1.74829 8.41551 1.74829 8.59751 1.78096 9.15517C1.78971 9.59151 1.87196 10.022 2.02537 10.4309C2.16064 10.7796 2.36715 11.0963 2.63171 11.3606C2.89628 11.625 3.21308 11.8313 3.56187 11.9663C3.96871 12.1256 4.39976 12.2144 4.83646 12.2288C5.39821 12.2538 5.57612 12.2614 7.00062 12.2614C8.42512 12.2614 8.60771 12.2614 9.16479 12.2288C9.60063 12.2202 10.0318 12.1375 10.44 11.9843C10.7886 11.8491 11.1053 11.6426 11.3697 11.3782C11.6341 11.1137 11.8406 10.7971 11.9759 10.4484C12.1293 10.0401 12.2115 9.60959 12.2203 9.17267C12.2454 8.61151 12.253 8.43359 12.253 7.00851C12.2518 5.58401 12.2518 5.40317 12.2191 4.84492ZM6.99654 9.68484C5.50671 9.68484 4.29979 8.47792 4.29979 6.98809C4.29979 5.49826 5.50671 4.29134 6.99654 4.29134C7.71176 4.29134 8.39769 4.57546 8.90343 5.0812C9.40917 5.58694 9.69329 6.27287 9.69329 6.98809C9.69329 7.70331 9.40917 8.38924 8.90343 8.89498C8.39769 9.40072 7.71176 9.68484 6.99654 9.68484ZM9.80062 4.82042C9.71802 4.8205 9.63622 4.80429 9.55989 4.77271C9.48356 4.74114 9.41421 4.69482 9.3558 4.63641C9.29739 4.57801 9.25108 4.50865 9.2195 4.43233C9.18793 4.356 9.17171 4.27419 9.17179 4.19159C9.17179 4.10905 9.18805 4.02732 9.21964 3.95106C9.25122 3.8748 9.29752 3.80551 9.35589 3.74714C9.41425 3.68878 9.48354 3.64248 9.5598 3.61089C9.63606 3.57931 9.71779 3.56305 9.80033 3.56305C9.88287 3.56305 9.96461 3.57931 10.0409 3.61089C10.1171 3.64248 10.1864 3.68878 10.2448 3.74714C10.3031 3.80551 10.3494 3.8748 10.381 3.95106C10.4126 4.02732 10.4289 4.10905 10.4289 4.19159C10.4289 4.53926 10.1477 4.82042 9.80062 4.82042Z">
                </path>
                <path d="M6.99589 8.73983C7.96336 8.73983 8.74764 7.95554 8.74764 6.98808C8.74764 6.02061 7.96336 5.23633 6.99589 5.23633C6.02843 5.23633 5.24414 6.02061 5.24414 6.98808C5.24414 7.95554 6.02843 8.73983 6.99589 8.73983Z">
                </path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="header-area2">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="header-menu-icon">
        <div className="menu-icon">
          <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.66675 9.16666H18.3334V10.8333H1.66675V9.16666ZM1.66675 4.16666H18.3334V5.83332H1.66675V4.16666ZM1.66675 14.1667H18.3334V15.8333H1.66675V14.1667Z">
            </path>
          </svg>
        </div>
        <div className="tt-style-switch">
          <i className="bi bi-brightness-low-fill" />
        </div>
      </div>
      <div className="header-logo">
        <a href="#"><img alt="image" className="img-fluid dark" src="assets/image/index-img/icon/dark-logo.svg" /></a>
        <a href="#"><img alt="image" className="img-fluid light" src="assets/image/index-img/icon/light-logo.svg" /></a>
      </div>
      <div className="header-right d-md-flex d-none">
        <div className="search-bar">
          <div className="search-btn">
            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.67458 2.95934C5.06925 2.95934 2.95925 5.06868 2.95925 7.66868C2.95925 10.2687 5.06925 12.3773 7.67458 12.3773C8.97459 12.3773 10.1499 11.8533 11.0033 11.004C11.4434 10.5674 11.7926 10.0477 12.0307 9.47524C12.2687 8.90273 12.3908 8.28869 12.3899 7.66868C12.3899 5.06868 10.2799 2.95934 7.67458 2.95934ZM1.33325 7.66868C1.33325 4.16868 4.17325 1.33334 7.67458 1.33334C11.1759 1.33334 14.0159 4.16868 14.0159 7.66868C14.0178 9.07185 13.5516 10.4356 12.6913 11.544L14.4279 13.2787C14.5084 13.353 14.573 13.4427 14.618 13.5426C14.6629 13.6424 14.6872 13.7503 14.6894 13.8598C14.6916 13.9693 14.6717 14.0781 14.6309 14.1797C14.59 14.2813 14.5291 14.3736 14.4517 14.4511C14.3743 14.5286 14.2821 14.5896 14.1805 14.6306C14.079 14.6716 13.9702 14.6916 13.8607 14.6895C13.7512 14.6874 13.6433 14.6632 13.5434 14.6184C13.4435 14.5736 13.3536 14.5091 13.2793 14.4287L11.5393 12.6913C10.4316 13.544 9.07244 14.0054 7.67458 14.0033C4.17325 14.0033 1.33325 11.168 1.33325 7.66868Z">
              </path>
            </svg>
          </div>
          <div className="search-input">
            <div className="serch-close" />
            <form>
              <div className="search-group">
                <div className="form-inner2">
                  <input type="text" placeholder="Enter your keywords" />
                  <button type="submit">
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.67458 2.95934C5.06925 2.95934 2.95925 5.06868 2.95925 7.66868C2.95925 10.2687 5.06925 12.3773 7.67458 12.3773C8.97459 12.3773 10.1499 11.8533 11.0033 11.004C11.4434 10.5674 11.7926 10.0477 12.0307 9.47524C12.2687 8.90273 12.3908 8.28869 12.3899 7.66868C12.3899 5.06868 10.2799 2.95934 7.67458 2.95934ZM1.33325 7.66868C1.33325 4.16868 4.17325 1.33334 7.67458 1.33334C11.1759 1.33334 14.0159 4.16868 14.0159 7.66868C14.0178 9.07185 13.5516 10.4356 12.6913 11.544L14.4279 13.2787C14.5084 13.353 14.573 13.4427 14.618 13.5426C14.6629 13.6424 14.6872 13.7503 14.6894 13.8598C14.6916 13.9693 14.6717 14.0781 14.6309 14.1797C14.59 14.2813 14.5291 14.3736 14.4517 14.4511C14.3743 14.5286 14.2821 14.5896 14.1805 14.6306C14.079 14.6716 13.9702 14.6916 13.8607 14.6895C13.7512 14.6874 13.6433 14.6632 13.5434 14.6184C13.4435 14.5736 13.3536 14.5091 13.2793 14.4287L11.5393 12.6913C10.4316 13.544 9.07244 14.0054 7.67458 14.0033C4.17325 14.0033 1.33325 11.168 1.33325 7.66868Z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="quick-search">
                <ul>
                  <li>Quick Search :</li>
                  <li><a href="#">Beauty,</a></li>
                  <li><a href="#">Gaming Tips,</a></li>
                  <li><a href="#">Fashion,</a></li>
                  <li><a href="#">Tech,</a></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="subscribe-btn ">
          <a href="#" className="primary-btn hover-btn">
            <svg className="arrow" width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999756 10L9.99976 1M9.99976 1C7.99976 1.375 3.62476 2.125 0.999756 1M9.99976 1C9.62476 2.875 8.87476 7 9.99976 10" stroke="#191919" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            SUBSCRIBE
          </a>
        </div>
      </div>
    </div>
  </div>
  <header className="life-style d-lg-flex d-none">
    <div className="container-md">
      <div className="col-lg-12">
        <div className="header-wrapper">
          <div className="main-menu">
            <ul className="menu-list">
              <li><a href="/">BLOGS</a></li>
              <li><a href="/addblog">ADD BLOG</a></li>
              {/* <li><a href="#">EDIT BLOG</a></li> */}
            </ul>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <ul className="social-area">
              <li>
                <a href="https://www.facebook.com/">
                  <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.81526 12.2483V7.46726H9.42818L9.66793 5.59534H7.81526V4.40301C7.81526 3.86284 7.96576 3.49301 8.74101 3.49301H9.72334V1.82409C9.24538 1.77287 8.76495 1.74814 8.28426 1.75001C6.85859 1.75001 5.87976 2.62034 5.87976 4.21809V5.59184H4.27734V7.46376H5.88326V12.2483H7.81526Z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://x.com/">
                  <svg width={12} height={12} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M11.025 0.65625H13.1722L8.48225 6.0305L14 13.3438H9.68012L6.2965 8.9075L2.42462 13.3438H0.2765L5.29287 7.595L0 0.65625H4.43013L7.48825 4.71012L11.025 0.65625ZM10.2725 12.0557H11.4625L3.78262 1.87687H2.50688L10.2725 12.0557Z">
                      </path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.90719 4.1972C3.61209 4.1972 4.18353 3.62576 4.18353 2.92086C4.18353 2.21597 3.61209 1.64453 2.90719 1.64453C2.20229 1.64453 1.63086 2.21597 1.63086 2.92086C1.63086 3.62576 2.20229 4.1972 2.90719 4.1972Z">
                    </path>
                    <path d="M5.38752 5.16523V12.2463H7.5861V8.74457C7.5861 7.82057 7.75994 6.92573 8.9056 6.92573C10.0355 6.92573 10.0495 7.98215 10.0495 8.8029V12.2469H12.2493V8.36365C12.2493 6.45615 11.8386 4.99023 9.60911 4.99023C8.53869 4.99023 7.82119 5.57765 7.52777 6.13357H7.49802V5.16523H5.38752ZM1.80469 5.16523H4.00677V12.2463H1.80469V5.16523Z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2191 4.84492C12.2132 4.40312 12.1305 3.96571 11.9747 3.55226C11.8396 3.20351 11.6332 2.88679 11.3687 2.62233C11.1043 2.35786 10.7875 2.15147 10.4388 2.01634C10.0307 1.86313 9.59948 1.78029 9.16362 1.77134C8.60246 1.74626 8.42454 1.73926 7.00004 1.73926C5.57554 1.73926 5.39296 1.73926 4.83587 1.77134C4.40022 1.78036 3.96924 1.8632 3.56129 2.01634C3.21249 2.15138 2.89572 2.35773 2.63124 2.62221C2.36677 2.88669 2.16041 3.20346 2.02537 3.55226C1.87186 3.96008 1.7892 4.39116 1.78096 4.82684C1.75587 5.38859 1.74829 5.56651 1.74829 6.99101C1.74829 8.41551 1.74829 8.59751 1.78096 9.15517C1.78971 9.59151 1.87196 10.022 2.02537 10.4309C2.16064 10.7796 2.36715 11.0963 2.63171 11.3606C2.89628 11.625 3.21308 11.8313 3.56187 11.9663C3.96871 12.1256 4.39976 12.2144 4.83646 12.2288C5.39821 12.2538 5.57612 12.2614 7.00062 12.2614C8.42512 12.2614 8.60771 12.2614 9.16479 12.2288C9.60063 12.2202 10.0318 12.1375 10.44 11.9843C10.7886 11.8491 11.1053 11.6426 11.3697 11.3782C11.6341 11.1137 11.8406 10.7971 11.9759 10.4484C12.1293 10.0401 12.2115 9.60959 12.2203 9.17267C12.2454 8.61151 12.253 8.43359 12.253 7.00851C12.2518 5.58401 12.2518 5.40317 12.2191 4.84492ZM6.99654 9.68484C5.50671 9.68484 4.29979 8.47792 4.29979 6.98809C4.29979 5.49826 5.50671 4.29134 6.99654 4.29134C7.71176 4.29134 8.39769 4.57546 8.90343 5.0812C9.40917 5.58694 9.69329 6.27287 9.69329 6.98809C9.69329 7.70331 9.40917 8.38924 8.90343 8.89498C8.39769 9.40072 7.71176 9.68484 6.99654 9.68484ZM9.80062 4.82042C9.71802 4.8205 9.63622 4.80429 9.55989 4.77271C9.48356 4.74114 9.41421 4.69482 9.3558 4.63641C9.29739 4.57801 9.25108 4.50865 9.2195 4.43233C9.18793 4.356 9.17171 4.27419 9.17179 4.19159C9.17179 4.10905 9.18805 4.02732 9.21964 3.95106C9.25122 3.8748 9.29752 3.80551 9.35589 3.74714C9.41425 3.68878 9.48354 3.64248 9.5598 3.61089C9.63606 3.57931 9.71779 3.56305 9.80033 3.56305C9.88287 3.56305 9.96461 3.57931 10.0409 3.61089C10.1171 3.64248 10.1864 3.68878 10.2448 3.74714C10.3031 3.80551 10.3494 3.8748 10.381 3.95106C10.4126 4.02732 10.4289 4.10905 10.4289 4.19159C10.4289 4.53926 10.1477 4.82042 9.80062 4.82042Z">
                    </path>
                    <path d="M6.99589 8.73983C7.96336 8.73983 8.74764 7.95554 8.74764 6.98808C8.74764 6.02061 7.96336 5.23633 6.99589 5.23633C6.02843 5.23633 5.24414 6.02061 5.24414 6.98808C5.24414 7.95554 6.02843 8.73983 6.99589 8.73983Z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  </>
  )
}

export default Header