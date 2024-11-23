import React, { useState, useEffect , useRef  } from "react";
import axios from "axios";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("travel");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const fileInputRef = useRef(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`); // Use navigate to redirect
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        setError("Error fetching blogs");
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      setToastMessage("Blog deleted successfully!");
      setShowToast(true);
      if (window.location.pathname === `/blog/${id}`) {
        navigate("/"); // Redirect to home page after deletion
      }
    } catch (err) {
      console.error("Error deleting blog", err);
      setToastMessage("Error deleting blog");
      setShowToast(true);
    }
  };

  const filteredBlogs = blogs.filter((blog) => blog.blogtype === category);
  return (
    <div>
      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} className="bg-dark" autohide>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <div className="blog-post2 mt-4">
        <div className="container">
          <div className="row g-4 mb-4 mt-4">
            <div className="col-12">
              <div className="blog-border two m-0">
                <div className="spot-light-btn">
                  <a href="/">
                    Spot Light
                  </a>
                </div>
                <div className="row mb-40">
                  <div className="col-lg-12">
                    <ul className="nav nav-tabs" id="myTab5" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${category === "travel" ? "active" : ""}`} onClick={() => setCategory("travel")} id="travel-tab" >Travel</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${category === "food" ? "active" : ""}`} onClick={() => setCategory("food")} id="food-tab">Food</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${category === "fashion" ? "active" : ""}`} onClick={() => setCategory("fashion")} id="fashion-tab">Fashion</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${category === "tech" ? "active" : ""}`} onClick={() => setCategory("tech")} id="tech-tab">Tech</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${category === "beauty" ? "active" : ""}`} onClick={() => setCategory("beauty")} id="beauty-tab">Beauty</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${category === "gaming" ? "active" : ""}`} onClick={() => setCategory("gaming")} id="gaming-tab">Gaming</button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* </div> */}
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="tab-content" id="myTabContent5">
                      <div className="tab-pane fade show active" id="travel" role="tabpanel">
                        <div className="row g-4 gy-5">
                          {filteredBlogs.length === 0 ? (
                            <div className="h-250 d-flex justify-content-center align-items-center">
                              <h3 className="text-center">No blogs available in this category.</h3>
                            </div>
                          ) : (
                            filteredBlogs.map((blog) => (
                              <div key={blog._id} className="col-md-6">
                                <div className="blog-card">
                                  <div className="blog-card-img-wrap">
                                    <a href={`blog/${blog._id}`}>
                                      <img src={`http://localhost:5000/${blog.blogimage}`} alt={blog.title}   ref={fileInputRef}/>
                                    </a>
                                    <a href={`category/${blog.blogtype}`}>
                                      <span>{blog.blogtype}</span>
                                    </a>
                                  </div>
                                  <div className="blog-content">
                                    <div className="author-area justify-content-between">
                                      <ul>
                                        <li>
                                          <a href="#">{blog.name}   onClick={() => handleBlogClick(blog._id)}</a>
                                        </li>
                                        <li>
                                          <a className="publish-date" href={`blog/${blog._id}`}>
                                            <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle cx={3} cy={3} r={3} fill="#C4C4C4"></circle>
                                            </svg>
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                          </a>
                                        </li>
                                      </ul>
                                      <div className="actions">
                                        <Link to={`/edit/${blog._id}`}>
                                          <i className="fa-regular fa-pen-to-square me-4 text-success" style={{ cursor: "pointer" }}></i>
                                        </Link>
                                        <i className="fa-regular fa-trash-can text-danger" onClick={() => deleteBlog(blog._id)} style={{ cursor: "pointer" }}></i>
                                      </div>
                                    </div>
                                    <h5>
                                      <a href={`blog/${blog._id}`}>{blog.title}</a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contect-section">
                <h3>Subscribe To Get Update Latest Blog Post</h3>
                <div className="input-area">
                  <input type="email" placeholder="Enter Email" className />
                  <button type="submit">
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z">
                      </path>
                    </svg>
                  </button>
                </div>
                <p>
                  <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_786_352)">
                      <path d="M12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6ZM9.0225 3.7275C8.96893 3.67411 8.90514 3.63208 8.83495 3.60391C8.76476 3.57574 8.68961 3.56202 8.61399 3.56356C8.53838 3.5651 8.46385 3.58187 8.39486 3.61288C8.32588 3.64388 8.26385 3.68848 8.2125 3.744L5.60775 7.06275L4.038 5.49225C3.93137 5.39289 3.79033 5.3388 3.64461 5.34137C3.49888 5.34394 3.35984 5.40297 3.25678 5.50603C3.15372 5.60909 3.09469 5.74813 3.09212 5.89386C3.08955 6.03958 3.14364 6.18062 3.243 6.28725L5.2275 8.2725C5.28096 8.32586 5.34462 8.36791 5.41469 8.39614C5.48475 8.42437 5.55979 8.43819 5.63531 8.43679C5.71083 8.43539 5.7853 8.4188 5.85427 8.38799C5.92324 8.35719 5.9853 8.31281 6.03675 8.2575L9.03075 4.515C9.13282 4.40887 9.18921 4.26696 9.18781 4.11972C9.1864 3.97248 9.12732 3.83166 9.02325 3.7275H9.0225Z">
                      </path>
                    </g>
                    <defs>
                      <clipPath id="clip0_786_352">
                        <rect width={12} height={12} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  No Credit Card Required
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="life-style-sidebar">
                <div className="sidebar-widget driscription">
                  <div className="header-logo pb-15">
                    <a href="/"><img alt="image" className="img-fluid dark" src="assets/image/index-img/icon/dark-logo.svg" /></a>
                    <a href="/"><img alt="image" className="img-fluid light" src="assets/image/index-img/icon/light-logo.svg" /></a>
                  </div>
                  <p><span>Welcome!</span> Feel free to mix and match these subcategories based on your
                    interests and the preferences of your target audience. Health &amp; Wellness is a
                    diverse niche.</p>
                  <div className="counter-area">
                    <ul>
                      <li className="single-counter">
                        <a href="https://www.facebook.com/">
                          <div className="icon">
                            <svg width={6} height={12} viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.81526 11.2482V6.46723H5.42818L5.66793 4.59531H3.81526V3.40298C3.81526 2.86281 3.96576 2.49298 4.74101 2.49298H5.72334V0.82406C5.24538 0.772838 4.76495 0.748106 4.28426 0.749977C2.85859 0.749977 1.87976 1.62031 1.87976 3.21806V4.59181H0.277344V6.46373H1.88326V11.2482H3.81526Z">
                              </path>
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
                              <path d="M7.04462 0.749146H7.1225C7.84175 0.751771 11.4861 0.778021 12.4688 1.04227C12.7658 1.12292 13.0365 1.28012 13.2538 1.49815C13.471 1.71619 13.6273 1.98743 13.7069 2.28477C13.7952 2.61727 13.8574 3.0574 13.8994 3.51152L13.9081 3.60252L13.9274 3.83002L13.9344 3.92102C13.9913 4.72077 13.9983 5.46977 13.9991 5.6334V5.69902C13.9983 5.86877 13.9904 6.66852 13.9274 7.50152L13.9204 7.5934L13.9125 7.6844C13.8687 8.1849 13.804 8.6819 13.7069 9.04765C13.6273 9.34499 13.471 9.61623 13.2538 9.83426C13.0365 10.0523 12.7658 10.2095 12.4688 10.2901C11.4537 10.5631 7.59587 10.5824 7.06125 10.5833H6.937C6.66663 10.5833 5.54838 10.578 4.37587 10.5378L4.22712 10.5325L4.151 10.529L4.00138 10.5229L3.85175 10.5168C2.8805 10.4739 1.95563 10.4048 1.5295 10.2893C1.23255 10.2087 0.961931 10.0516 0.74467 9.83376C0.527409 9.61588 0.371108 9.34482 0.291375 9.04765C0.19425 8.68277 0.1295 8.1849 0.08575 7.6844L0.07875 7.59252L0.07175 7.50152C0.028318 6.90863 0.0043884 6.31448 0 5.72002L0 5.6124C0.00175 5.42427 0.00875 4.77415 0.056 4.05665L0.062125 3.96652L0.06475 3.92102L0.07175 3.83002L0.091 3.60252L0.09975 3.51152C0.14175 3.0574 0.203875 2.6164 0.29225 2.28477C0.371849 1.98743 0.528091 1.71619 0.74536 1.49815C0.96263 1.28012 1.23332 1.12292 1.53038 1.04227C1.9565 0.928521 2.88137 0.85852 3.85262 0.81477L4.00138 0.808645L4.15188 0.803396L4.22712 0.800771L4.37675 0.794646C5.2095 0.767874 6.04258 0.752997 6.87575 0.750021L7.04462 0.749146ZM5.6 3.5579V7.77365L9.23738 5.66665L5.6 3.5579Z">
                              </path>
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
                              <path d="M11.2189 3.84492C11.213 3.40312 11.1303 2.96571 10.9745 2.55226C10.8393 2.20351 10.6329 1.88679 10.3685 1.62233C10.104 1.35786 9.78729 1.15147 9.43855 1.01634C9.03041 0.863133 8.59923 0.78029 8.16338 0.771341C7.60221 0.746258 7.4243 0.739258 5.9998 0.739258C4.5753 0.739258 4.39271 0.739258 3.83563 0.771341C3.39997 0.780356 2.969 0.863198 2.56105 1.01634C2.21225 1.15138 1.89548 1.35773 1.631 1.62221C1.36652 1.88669 1.16017 2.20346 1.02513 2.55226C0.871615 2.96008 0.788952 3.39116 0.780714 3.82684C0.75563 4.38859 0.748047 4.56651 0.748047 5.99101C0.748047 7.41551 0.748047 7.59751 0.780714 8.15517C0.789464 8.59151 0.871713 9.02201 1.02513 9.43092C1.16039 9.77962 1.3669 10.0963 1.63147 10.3606C1.89603 10.625 2.21283 10.8313 2.56163 10.9663C2.96847 11.1256 3.39951 11.2144 3.83621 11.2288C4.39796 11.2538 4.57588 11.2614 6.00038 11.2614C7.42488 11.2614 7.60746 11.2614 8.16455 11.2288C8.60039 11.2202 9.03159 11.1375 9.43971 10.9843C9.78837 10.8491 10.105 10.6426 10.3695 10.3782C10.6339 10.1137 10.8403 9.79708 10.9756 9.44842C11.129 9.04009 11.2113 8.60959 11.22 8.17267C11.2451 7.61151 11.2527 7.43359 11.2527 6.00851C11.2515 4.58401 11.2515 4.40317 11.2189 3.84492V3.84492ZM5.9963 8.68484C4.50646 8.68484 3.29955 7.47792 3.29955 5.98809C3.29955 4.49826 4.50646 3.29134 5.9963 3.29134C6.71152 3.29134 7.39745 3.57546 7.90319 4.0812C8.40893 4.58694 8.69305 5.27287 8.69305 5.98809C8.69305 6.70331 8.40893 7.38924 7.90319 7.89498C7.39745 8.40072 6.71152 8.68484 5.9963 8.68484V8.68484ZM8.80038 3.82042C8.71778 3.8205 8.63597 3.80429 8.55965 3.77271C8.48332 3.74114 8.41397 3.69482 8.35556 3.63641C8.29715 3.57801 8.25083 3.50865 8.21926 3.43233C8.18768 3.356 8.17147 3.27419 8.17155 3.19159C8.17155 3.10905 8.1878 3.02732 8.21939 2.95106C8.25098 2.8748 8.29728 2.80551 8.35564 2.74714C8.41401 2.68878 8.4833 2.64248 8.55956 2.61089C8.63581 2.57931 8.71755 2.56305 8.80009 2.56305C8.88263 2.56305 8.96436 2.57931 9.04062 2.61089C9.11688 2.64248 9.18617 2.68878 9.24453 2.74714C9.3029 2.80551 9.3492 2.8748 9.38079 2.95106C9.41237 3.02732 9.42863 3.10905 9.42863 3.19159C9.42863 3.53926 9.14746 3.82042 8.80038 3.82042Z">
                              </path>
                              <path d="M5.99589 7.73983C6.96336 7.73983 7.74764 6.95554 7.74764 5.98808C7.74764 5.02061 6.96336 4.23633 5.99589 4.23633C5.02843 4.23633 4.24414 5.02061 4.24414 5.98808C4.24414 6.95554 5.02843 7.73983 5.99589 7.73983Z">
                              </path>
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
                      <a href="/"><img src="assets/image/life-style/sidebar-img1.png" alt /></a>
                    </div>
                    <div className="recent-post-content">
                      <a href="/">05 January, 2024</a>
                      <h5><a href="/">A Guide to Better Sleep Habits.</a></h5>
                    </div>
                  </div>
                  <div className="recent-post mb-20">
                    <div className="recent-post-img">
                      <a href="/"><img src="assets/image/life-style/sidebar-img2.png" alt /></a>
                    </div>
                    <div className="recent-post-content">
                      <a href="/">05 January, 2024</a>
                      <h5><a href="/">A Guide to Better Sleep Habits.</a></h5>
                    </div>
                  </div>
                  <div className="recent-post mb-20">
                    <div className="recent-post-img">
                      <a href="/"><img src="assets/image/life-style/sidebar-img3.png" alt /></a>
                    </div>
                    <div className="recent-post-content">
                      <a href="/">05 January, 2024</a>
                      <h5><a href="/">A Guide to Better Sleep Habits.</a></h5>
                    </div>
                  </div>
                  <div className="recent-post mb-20">
                    <div className="recent-post-img">
                      <a href="/"><img src="assets/image/life-style/sidebar-img4.png" alt /></a>
                    </div>
                    <div className="recent-post-content">
                      <a href="/">05 January, 2024</a>
                      <h5><a href="/">A Guide to Better Sleep Habits.</a></h5>
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
                      <a href="/">Beauty (10)</a>
                    </li>
                    <li>
                      <a href="/">Gaming Tips (05)</a>
                    </li>
                    <li>
                      <a href="/">Fashion (02)</a>
                    </li>
                    <li>
                      <a href="/">Tech (03)</a>
                    </li>
                    <li>
                      <a href="/">Parenting (03)</a>
                    </li>
                    <li>
                      <a href="/">Health (03)</a>
                    </li>
                    <li>
                      <a href="/">Events (04)</a>
                    </li>
                    <li>
                      <a href="/">Art (03)</a>
                    </li>
                    <li>
                      <a href="/">Food (06)</a>
                    </li>
                    <li>
                      <a href="/">Travel (02)</a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget about-section mb-40">
                  <ul className="category">
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/">Support</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <a href="https://themeforest.net/item/axleo-digital-agency-creative-portfolio-template/51144673" className="sidebar-add-image">
                  <img src="assets/image/life-style/Sidebar-ads.png" alt />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div >

  )
}

export default Home