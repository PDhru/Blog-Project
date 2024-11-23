import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const SingleBlog = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch the blog data by ID
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!blog) {
        return <p>Blog not found.</p>;
    }
    return (
        <>
<div className="blog-post-9 pt-20">
  <div className="container">
    <div className="inner-page-breadcrumb-wrapper mb-20">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Gaming</a></li>
        <li>{blog.title}</li>
      </ul>
    </div>
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-8">
        <div className="post-thump">
    <a href="">  <img src={`http://localhost:5000/${blog.blogimage}`}  alt={blog.title} /></a>
        </div>
        <ul className="post-meta">
          <li>
            <a href="#">{blog.name}</a>
          </li>
          <li>
            <a className="publish-date" href="#">{new Date(blog.createdAt).toLocaleDateString()}</a>
          </li>
        </ul>
        <h1>{blog.title}</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10 mb-60">
            <div className="blog-content">
              <p>{blog.message}</p>
            </div>
          </div>
        </div>

        <div className="blog-tag">
          <div className="author-name">
            <h6>Posted by <a href="#">{blog.name}</a></h6>
          </div>
          <div className="tag-items">
            <h6>Categorized:</h6>
            <ul className="p-0 m-0">
              <li><a href="#">{blog.blogtype}</a></li>
            </ul>
          </div>
        </div>
        <div className="post-btn">
          <div className="privious-post-btn">
            <a href="#">
              <svg className="arrow" width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10L1 1M1 1C3 1.375 7.375 2.125 10 1M1 1C1.375 2.875 2.125 7 1 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              PREVIOUS POST</a>
          </div>
          <div className="next-post-btn">
            <a href="#">
              <svg className="arrow" width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" stroke="#191919" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              NEXT POST</a>
          </div>
        </div>
        <div className="share-post-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="share-post-content">
                <h3>Share This Post</h3>
                <ul>
                  <li>
                    <a className="icon" href="https://www.facebook.com/">
                      <svg width={6} height={12} viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.81526 11.2483V6.46735H5.42818L5.66793 4.59543H3.81526V3.4031C3.81526 2.86293 3.96576 2.4931 4.74101 2.4931H5.72334V0.824182C5.24538 0.77296 4.76495 0.748228 4.28426 0.750099C2.85859 0.750099 1.87976 1.62043 1.87976 3.21818V4.59193H0.277344V6.46385H1.88326V11.2483H3.81526Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="icon" href="https://x.com/">
                      <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M11.025 0.65625H13.1722L8.48225 6.0305L14 13.3438H9.68012L6.2965 8.9075L2.42462 13.3438H0.2765L5.29287 7.595L0 0.65625H4.43013L7.48825 4.71012L11.025 0.65625ZM10.2725 12.0557H11.4625L3.78262 1.87687H2.50688L10.2725 12.0557Z" />
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="icon" href="https://www.linkedin.com/">
                      <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.90719 4.1972C3.61209 4.1972 4.18353 3.62576 4.18353 2.92086C4.18353 2.21597 3.61209 1.64453 2.90719 1.64453C2.20229 1.64453 1.63086 2.21597 1.63086 2.92086C1.63086 3.62576 2.20229 4.1972 2.90719 4.1972Z" />
                        <path d="M5.38752 5.16523V12.2463H7.5861V8.74457C7.5861 7.82057 7.75994 6.92573 8.9056 6.92573C10.0355 6.92573 10.0495 7.98215 10.0495 8.8029V12.2469H12.2493V8.36365C12.2493 6.45615 11.8386 4.99023 9.60911 4.99023C8.53869 4.99023 7.82119 5.57765 7.52777 6.13357H7.49802V5.16523H5.38752ZM1.80469 5.16523H4.00677V12.2463H1.80469V5.16523Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="icon" href="https://www.instagram.com/">
                      <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2191 4.84492C12.2132 4.40312 12.1305 3.96571 11.9747 3.55226C11.8396 3.20351 11.6332 2.88679 11.3687 2.62233C11.1043 2.35786 10.7875 2.15147 10.4388 2.01634C10.0307 1.86313 9.59948 1.78029 9.16362 1.77134C8.60246 1.74626 8.42454 1.73926 7.00004 1.73926C5.57554 1.73926 5.39296 1.73926 4.83587 1.77134C4.40022 1.78036 3.96924 1.8632 3.56129 2.01634C3.21249 2.15138 2.89572 2.35773 2.63124 2.62221C2.36677 2.88669 2.16041 3.20346 2.02537 3.55226C1.87186 3.96008 1.7892 4.39116 1.78096 4.82684C1.75587 5.38859 1.74829 5.56651 1.74829 6.99101C1.74829 8.41551 1.74829 8.59751 1.78096 9.15517C1.78971 9.59151 1.87196 10.022 2.02537 10.4309C2.16064 10.7796 2.36715 11.0963 2.63171 11.3606C2.89628 11.625 3.21308 11.8313 3.56187 11.9663C3.96871 12.1256 4.39976 12.2144 4.83646 12.2288C5.39821 12.2538 5.57612 12.2614 7.00062 12.2614C8.42512 12.2614 8.60771 12.2614 9.16479 12.2288C9.60063 12.2202 10.0318 12.1375 10.44 11.9843C10.7886 11.8491 11.1053 11.6426 11.3697 11.3782C11.6341 11.1137 11.8406 10.7971 11.9759 10.4484C12.1293 10.0401 12.2115 9.60959 12.2203 9.17267C12.2454 8.61151 12.253 8.43359 12.253 7.00851C12.2518 5.58401 12.2518 5.40317 12.2191 4.84492ZM6.99654 9.68484C5.50671 9.68484 4.29979 8.47792 4.29979 6.98809C4.29979 5.49826 5.50671 4.29134 6.99654 4.29134C7.71176 4.29134 8.39769 4.57546 8.90343 5.0812C9.40917 5.58694 9.69329 6.27287 9.69329 6.98809C9.69329 7.70331 9.40917 8.38924 8.90343 8.89498C8.39769 9.40072 7.71176 9.68484 6.99654 9.68484ZM9.80062 4.82042C9.71802 4.8205 9.63622 4.80429 9.55989 4.77271C9.48356 4.74114 9.41421 4.69482 9.3558 4.63641C9.29739 4.57801 9.25108 4.50865 9.2195 4.43233C9.18793 4.356 9.17171 4.27419 9.17179 4.19159C9.17179 4.10905 9.18805 4.02732 9.21964 3.95106C9.25122 3.8748 9.29752 3.80551 9.35589 3.74714C9.41425 3.68878 9.48354 3.64248 9.5598 3.61089C9.63606 3.57931 9.71779 3.56305 9.80033 3.56305C9.88287 3.56305 9.96461 3.57931 10.0409 3.61089C10.1171 3.64248 10.1864 3.68878 10.2448 3.74714C10.3031 3.80551 10.3494 3.8748 10.381 3.95106C10.4126 4.02732 10.4289 4.10905 10.4289 4.19159C10.4289 4.53926 10.1477 4.82042 9.80062 4.82042Z" />
                        <path d="M6.99589 8.73983C7.96336 8.73983 8.74764 7.95554 8.74764 6.98808C8.74764 6.02061 7.96336 5.23633 6.99589 5.23633C6.02843 5.23633 5.24414 6.02061 5.24414 6.98808C5.24414 7.95554 6.02843 8.73983 6.99589 8.73983Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className="input-area" id="inviteCode">
                  <input id="link-input" defaultValue="https://www.egenstheme.com/" readOnly />
                  <div id="copy-link-icon">
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.97324 10.9956C6.99524 11.0066 7.02724 11.0066 7.02724 11.0066V11.0286C7.06024 11.0286 7.12424 10.9846 7.12424 10.9846L8.29028 9.82042L8.32328 9.78845C8.35314 9.76404 8.37852 9.73462 8.39828 9.70151C8.42028 9.65854 8.43028 9.61457 8.40828 9.5716C8.38828 9.52863 8.35528 9.48566 8.31228 9.48566C7.87035 9.39014 7.46545 9.1691 7.14624 8.84912C6.76572 8.47567 6.53189 7.97821 6.48723 7.44712C6.45456 7.1118 6.49673 6.77341 6.61069 6.45634C6.72464 6.13926 6.90755 5.85138 7.14624 5.61343L10.2003 2.55962C11.0634 1.69624 12.5744 1.69624 13.4384 2.55962C13.8704 3.0023 14.1084 3.57389 14.1084 4.18845C14.1084 4.80301 13.8704 5.3856 13.4384 5.81729L12.0464 7.1983C12.0306 7.21556 12.0193 7.23645 12.0136 7.25912C12.0078 7.28178 12.0077 7.30551 12.0134 7.32821C12.1434 7.79088 12.2184 8.27653 12.2184 8.76218C12.2184 8.99901 12.2084 9.20387 12.1754 9.37674C12.1754 9.4307 12.1974 9.49566 12.2514 9.51664C12.2768 9.532 12.3066 9.53828 12.3361 9.53447C12.3655 9.53066 12.3928 9.51697 12.4134 9.49566L14.7775 7.14434C16.4075 5.50451 16.4075 2.85041 14.7775 1.22158C13.9921 0.43928 12.9283 0 11.8194 0C10.7104 0 9.6467 0.43928 8.86129 1.22158L5.80721 4.27539C5.5372 4.5452 5.32219 4.83699 5.16019 5.12778L5.14719 5.13778C5.13719 5.14577 5.12718 5.15276 5.12718 5.15976C4.79591 5.74751 4.61115 6.40632 4.58852 7.0805C4.56589 7.75467 4.70606 8.42438 4.99718 9.03299C5.20319 9.45269 5.46219 9.83042 5.80721 10.1762C6.14221 10.5209 6.54123 10.8017 6.97324 10.9956ZM1.23107 14.7709C2.0501 15.5803 3.12013 15.99 4.18816 15.99L4.15616 16C5.22419 16 6.30422 15.5903 7.11424 14.7819L10.1683 11.7291C10.727 11.1773 11.1165 10.4777 11.2914 9.7125L11.3564 9.23784C11.3774 9.12992 11.3774 9.02199 11.3774 8.91407V8.48338C11.3774 8.37446 11.3674 8.26654 11.3454 8.1806C11.3354 8.06168 11.3134 7.96475 11.2914 7.86782C11.2664 7.74735 11.234 7.62854 11.1944 7.51208C11.0008 6.87575 10.652 6.29748 10.1793 5.82928C9.84282 5.49624 9.45228 5.22256 9.0243 5.01986C8.9813 4.98788 8.87329 5.04184 8.87329 5.04184L7.70726 6.20601C7.67526 6.23899 7.63226 6.28196 7.59926 6.34591C7.57826 6.37889 7.57826 6.42186 7.59926 6.46582C7.62126 6.50879 7.65326 6.54077 7.69626 6.54077C8.13927 6.62671 8.53828 6.84256 8.86229 7.16632C9.29431 7.60901 9.53231 8.19159 9.52131 8.82713C9.51031 9.21685 9.41331 9.59359 9.2293 9.91635C9.17794 10.0094 9.11658 10.0965 9.0463 10.1762C9.0033 10.2411 8.9493 10.3161 8.86229 10.402L5.80721 13.4548C5.37361 13.8759 4.79279 14.1115 4.18816 14.1115C3.58352 14.1115 3.00271 13.8759 2.56911 13.4548C2.13942 13.0215 1.89858 12.436 1.89909 11.826C1.89909 11.2114 2.1371 10.6288 2.56911 10.1972L3.96215 8.80615C3.99415 8.76318 4.00515 8.70922 3.99415 8.66625C3.77779 8.01315 3.71483 7.31903 3.81015 6.6377C3.81488 6.60938 3.81008 6.58029 3.79651 6.55498C3.78294 6.52966 3.76136 6.50956 3.73515 6.4978C3.69214 6.46483 3.58414 6.51879 3.58414 6.51879L1.23007 8.85911C0.838368 9.24512 0.527785 9.70543 0.316558 10.213C0.105332 10.7206 -0.00228147 11.2653 3.66695e-05 11.815C3.66695e-05 12.9252 0.44305 13.9834 1.23007 14.7699L1.23107 14.7709Z" />
                    </svg>
                  </div>
                  <span id="copy-text" className="copy-text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="inquiry-form ">
              <div className="title">
                <h4>Leave Your Comment:</h4>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label>Your Name* :</label>
                      <input type="text" placeholder="Jackson Mile" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label>Your Email* :</label>
                      <input type="email" placeholder="example@gamil.com" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-15">
                      <label>Your Comments*</label>
                      <textarea placeholder="Write Something..." defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                      <label className="form-check-label" htmlFor="contactCheck">
                        Please save my name, email address for the next time I
                        comment.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-inner">
                  <button className="primary-btn1" data-text="Post Comment" type="submit">
                    <span> <svg className="arrow" width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" stroke="#191919" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      SUBMIT COMMENT</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="life-style-sidebar">
          <div className="sidebar-widget driscription">
            <div className="header-logo pb-15">
              <a href="#"><img alt="image" className="img-fluid dark" src="../assets/image/index-img/icon/dark-logo.svg" /></a>
              <a href="#"><img alt="image" className="img-fluid light" src="../assets/image/index-img/icon/light-logo.svg" /></a>
            </div>
            <p><span>Welcome!</span> Feel free to mix and match these subcategories based on your interests and the preferences of your target audience. Health &amp; Wellness is a diverse niche.</p>
            <div className="counter-area">
              <ul>
                <li className="single-counter">
                  <a href="https://www.facebook.com/">
                    <div className="icon">
                      <svg width={6} height={12} viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.81526 11.2482V6.46723H5.42818L5.66793 4.59531H3.81526V3.40298C3.81526 2.86281 3.96576 2.49298 4.74101 2.49298H5.72334V0.82406C5.24538 0.772838 4.76495 0.748106 4.28426 0.749977C2.85859 0.749977 1.87976 1.62031 1.87976 3.21806V4.59181H0.277344V6.46373H1.88326V11.2482H3.81526Z" />
                      </svg>
                    </div>
                    <div className="number">
                      <h5 className="counter">222</h5>
                      <span>K</span>
                    </div>
                  </a>
                </li>
                <li className="single-counter">
                  <a href="https://youtube.com/">
                    <div className="icon">
                      <svg width={14} height={11} viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.04462 0.749146H7.1225C7.84175 0.751771 11.4861 0.778021 12.4688 1.04227C12.7658 1.12292 13.0365 1.28012 13.2538 1.49815C13.471 1.71619 13.6273 1.98743 13.7069 2.28477C13.7952 2.61727 13.8574 3.0574 13.8994 3.51152L13.9081 3.60252L13.9274 3.83002L13.9344 3.92102C13.9913 4.72077 13.9983 5.46977 13.9991 5.6334V5.69902C13.9983 5.86877 13.9904 6.66852 13.9274 7.50152L13.9204 7.5934L13.9125 7.6844C13.8687 8.1849 13.804 8.6819 13.7069 9.04765C13.6273 9.34499 13.471 9.61623 13.2538 9.83426C13.0365 10.0523 12.7658 10.2095 12.4688 10.2901C11.4537 10.5631 7.59587 10.5824 7.06125 10.5833H6.937C6.66663 10.5833 5.54838 10.578 4.37587 10.5378L4.22712 10.5325L4.151 10.529L4.00138 10.5229L3.85175 10.5168C2.8805 10.4739 1.95563 10.4048 1.5295 10.2893C1.23255 10.2087 0.961931 10.0516 0.74467 9.83376C0.527409 9.61588 0.371108 9.34482 0.291375 9.04765C0.19425 8.68277 0.1295 8.1849 0.08575 7.6844L0.07875 7.59252L0.07175 7.50152C0.028318 6.90863 0.0043884 6.31448 0 5.72002L0 5.6124C0.00175 5.42427 0.00875 4.77415 0.056 4.05665L0.062125 3.96652L0.06475 3.92102L0.07175 3.83002L0.091 3.60252L0.09975 3.51152C0.14175 3.0574 0.203875 2.6164 0.29225 2.28477C0.371849 1.98743 0.528091 1.71619 0.74536 1.49815C0.96263 1.28012 1.23332 1.12292 1.53038 1.04227C1.9565 0.928521 2.88137 0.85852 3.85262 0.81477L4.00138 0.808645L4.15188 0.803396L4.22712 0.800771L4.37675 0.794646C5.2095 0.767874 6.04258 0.752997 6.87575 0.750021L7.04462 0.749146ZM5.6 3.5579V7.77365L9.23738 5.66665L5.6 3.5579Z" />
                      </svg>
                    </div>
                    <div className="number">
                      <h5 className="counter">222</h5>
                      <span>K</span>
                    </div>
                  </a>
                </li>
                <li className="single-counter">
                  <a href="https://www.instagram.com/">
                    <div className="icon">
                      <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2189 3.84492C11.213 3.40312 11.1303 2.96571 10.9745 2.55226C10.8393 2.20351 10.6329 1.88679 10.3685 1.62233C10.104 1.35786 9.78729 1.15147 9.43855 1.01634C9.03041 0.863133 8.59923 0.78029 8.16338 0.771341C7.60221 0.746258 7.4243 0.739258 5.9998 0.739258C4.5753 0.739258 4.39271 0.739258 3.83563 0.771341C3.39997 0.780356 2.969 0.863198 2.56105 1.01634C2.21225 1.15138 1.89548 1.35773 1.631 1.62221C1.36652 1.88669 1.16017 2.20346 1.02513 2.55226C0.871615 2.96008 0.788952 3.39116 0.780714 3.82684C0.75563 4.38859 0.748047 4.56651 0.748047 5.99101C0.748047 7.41551 0.748047 7.59751 0.780714 8.15517C0.789464 8.59151 0.871713 9.02201 1.02513 9.43092C1.16039 9.77962 1.3669 10.0963 1.63147 10.3606C1.89603 10.625 2.21283 10.8313 2.56163 10.9663C2.96847 11.1256 3.39951 11.2144 3.83621 11.2288C4.39796 11.2538 4.57588 11.2614 6.00038 11.2614C7.42488 11.2614 7.60746 11.2614 8.16455 11.2288C8.60039 11.2202 9.03159 11.1375 9.43971 10.9843C9.78837 10.8491 10.105 10.6426 10.3695 10.3782C10.6339 10.1137 10.8403 9.79708 10.9756 9.44842C11.129 9.04009 11.2113 8.60959 11.22 8.17267C11.2451 7.61151 11.2527 7.43359 11.2527 6.00851C11.2515 4.58401 11.2515 4.40317 11.2189 3.84492V3.84492ZM5.9963 8.68484C4.50646 8.68484 3.29955 7.47792 3.29955 5.98809C3.29955 4.49826 4.50646 3.29134 5.9963 3.29134C6.71152 3.29134 7.39745 3.57546 7.90319 4.0812C8.40893 4.58694 8.69305 5.27287 8.69305 5.98809C8.69305 6.70331 8.40893 7.38924 7.90319 7.89498C7.39745 8.40072 6.71152 8.68484 5.9963 8.68484V8.68484ZM8.80038 3.82042C8.71778 3.8205 8.63597 3.80429 8.55965 3.77271C8.48332 3.74114 8.41397 3.69482 8.35556 3.63641C8.29715 3.57801 8.25083 3.50865 8.21926 3.43233C8.18768 3.356 8.17147 3.27419 8.17155 3.19159C8.17155 3.10905 8.1878 3.02732 8.21939 2.95106C8.25098 2.8748 8.29728 2.80551 8.35564 2.74714C8.41401 2.68878 8.4833 2.64248 8.55956 2.61089C8.63581 2.57931 8.71755 2.56305 8.80009 2.56305C8.88263 2.56305 8.96436 2.57931 9.04062 2.61089C9.11688 2.64248 9.18617 2.68878 9.24453 2.74714C9.3029 2.80551 9.3492 2.8748 9.38079 2.95106C9.41237 3.02732 9.42863 3.10905 9.42863 3.19159C9.42863 3.53926 9.14746 3.82042 8.80038 3.82042Z" />
                        <path d="M5.99589 7.73983C6.96336 7.73983 7.74764 6.95554 7.74764 5.98808C7.74764 5.02061 6.96336 4.23633 5.99589 4.23633C5.02843 4.23633 4.24414 5.02061 4.24414 5.98808C4.24414 6.95554 5.02843 7.73983 5.99589 7.73983Z" />
                      </svg>
                    </div>
                    <div className="number">
                      <h5 className="counter">222</h5>
                      <span>K</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-widget featured-post">
            <h6>Featured Post</h6>
            <div className="recent-post mb-20">
              <div className="recent-post-img">
                <a href="#"><img src="../assets/image/life-style/sidebar-img1.png" alt /></a>
              </div>
              <div className="recent-post-content">
                <a href="#">05 January, 2024</a>
                <h5><a href="#">A Guide to Better Sleep Habits.</a></h5>
              </div>
            </div>
            <div className="recent-post mb-20">
              <div className="recent-post-img">
                <a href="#"><img src="../assets/image/life-style/sidebar-img2.png" alt /></a>
              </div>
              <div className="recent-post-content">
                <a href="#">05 January, 2024</a>
                <h5><a href="#">A Guide to Better Sleep Habits.</a></h5>
              </div>
            </div>
            <div className="recent-post mb-20">
              <div className="recent-post-img">
                <a href="#"><img src="../assets/image/life-style/sidebar-img3.png" alt /></a>
              </div>
              <div className="recent-post-content">
                <a href="#">05 January, 2024</a>
                <h5><a href="#">A Guide to Better Sleep Habits.</a></h5>
              </div>
            </div>
            <div className="recent-post mb-20">
              <div className="recent-post-img">
                <a href="#"><img src="../assets/image/life-style/sidebar-img4.png" alt /></a>
              </div>
              <div className="recent-post-content">
                <a href="#">05 January, 2024</a>
                <h5><a href="#">A Guide to Better Sleep Habits.</a></h5>
              </div>
            </div>
          </div>
          <div className="sidebar-widget discover-post">
            <h6 className="discover-title">Discover By Tags
              <svg className="arrow" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </h6>
            <ul className="category">
              <li>
                <a href="#">Beauty (10)</a>
              </li>
              <li>
                <a href="#">Gaming Tips (05)</a>
              </li>
              <li>
                <a href="#">Fashion (02)</a>
              </li>
              <li>
                <a href="#">Tech (03)</a>
              </li>
              <li>
                <a href="#">Parenting (03)</a>
              </li>
              <li>
                <a href="#">Health (03)</a>
              </li>
              <li>
                <a href="#">Events (04)</a>
              </li>
              <li>
                <a href="#">Art (03)</a>
              </li>
              <li>
                <a href="#">Food (06)</a>
              </li>
              <li>
                <a href="#">Travel (02)</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-widget about-section mb-40">
            <ul className="category">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
    )
}

export default SingleBlog