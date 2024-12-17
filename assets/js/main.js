// skills Data

const skills = [
  { name: "React.js", progress: "72" },
  { name: "Next.js", progress: "65" },
  { name: "Nest.js", progress: "52" },
  { name: "TypeScript", progress: "68" },
  { name: "Python", progress: "70" },
  { name: "ETL", progress: "60" },
  { name: "Web Scraping", progress: "60" },
  { name: "Beautifulsoup", progress: "70" },
  { name: "Scrapy", progress: "60" },
  { name: "Numpy", progress: "60" },
  { name: "Pandas", progress: "60" },
  { name: "Sci-kit Learn", progress: "60" },
  { name: "Tensorflow", progress: "70" },
  { name: "Keras", progress: "70" },
  { name: "LLM", progress: "55" },
  { name: "SQL", progress: "70" },
  { name: "Selenium", progress: "60" },
  { name: "Git", progress: "70" },
  { name: "Dash", progress: "50" },
  { name: "Django", progress: "70" },
  { name: "FastAPI", progress: "70" },
  { name: "Flask", progress: "50" },
  { name: "Docker", progress: "60" },
  { name: "Pytest", progress: "65" },
  { name: "JQuery", progress: "60" },
  { name: "Aws", progress: "70" },
  { name: "Azure", progress: "55" },
  { name: "GCP", progress: "55" },
  { name: "Elastic Search", progress: "50" },
  { name: "Redis", progress: "70" },
  { name: "Celery", progress: "60" },
];

// projects data
const projectData = [
  {
    image: "assets/img/portfolio/feltiv.png",
    url: "https://primecarers.co.uk/",
    alt: "Feltiv",
    details:
      "Craft human-like synthesised voices with AI-powered voice automation & engineering, featuring pre-built neural voices and customisable option to train human voices",
    tech: "Python, Fast API, Numpy, Pandas, Sci-kit Learn, React.js, Postgresql ",
  },
  {
    image: "assets/img/portfolio/upstrm.png",
    url: "https://sharelyze.com/",
    alt: "UPSTRM",
    details:
      "Transform how you run your business with our all-in-one platform. Built for business owners looking to get ahead.",
    tech: "Python, Fast API, GCP, LLM, Vertex AI, Postgres, Firestore, Mongodb ",
  },
  {
    image: "assets/img/portfolio/basesolve.png",
    url: "https://basesolve.com/",
    alt: "Basesolve",
    details:
      " Streamlining & empowering your workflow from raw NGS data to uncomparably accurate insights for diagnostics as well as research",
    tech: "Python, Django, React.JS, REST API, AWS, Mysql ",
  },
  {
    image: "assets/img/portfolio/zast.png",
    url: "https://www.feltiv.com/",
    alt: "Zast Logistic Solutions",
    details:
      " Django based fully managed web application for logistic server across various modules. Zast has various services like wallet facility, tracking, booking, various types of report and many more.",
    tech: "Python, Django, React.JS, REST API, AWS, Mysql ",
  },
  {
    image: "assets/img/portfolio/adtrac.png",
    url: "https://www.feltiv.com/",
    alt: "Adtrac",
    details:
      "Adtrac is a media advertising platform where clients can post their advertisement, campaign and location based requirements and sales channel will communicate with screen owners and run advertisements based on target audience on the street. Developed backend using Django Rest API. ",
    tech: "Python, Django, Django REST API, Postgresql ",
  },

  {
    image: "assets/img/portfolio/praccel.png",
    url: "https://www.feltiv.com/",
    alt: "Praccel",
    details:
      "Praccel is an English learning app for students made using Django and Flutter. Where English experts give reading assignments to students and once students get the assignment they can read and submit audio. For the audio process azure speech to text I have integrated.",
    tech: "Python, Django, AWS, Azure Speech to Text API, Postgresql  ",
  },

  {
    image: "assets/img/portfolio/hobnob.png",
    url: "https://www.feltiv.com/",
    alt: "Hobnob",
    details:
      "TAll in one social media influencer’s community for brand campaigns and promotions on various social media promotions.",
    tech: "Python, Django, JavaScript, Mysql ",
  },

  {
    image: "assets/img/portfolio/null-innovation.png",
    url: "https://www.feltiv.com/",
    alt: "Keylancer",
    details:
      "Keylancer is a Kuwait based freelancing platform where clients can post their requirements and users can bid and communicate with clients and get rewarded from there. Developed backend using Django Wagtail and frontend with React JS. Integrated Tap Payment gateway. Explored React JS for implementing components also implemented chat threads for communication between site users.",
    tech: "Python, Django, Django REST API,Vue.js,  ",
  },
];

/**
 * Template Name: iPortfolio - v1.2.1
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

!(function ($) {
  "use strict";

  // Hero typed
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .scrollto", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
        }
        return false;
      }
    }
  });

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "icofont-navigation-menu icofont-close"
    );
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });
})(jQuery);

// skills data
document.addEventListener("DOMContentLoaded", function () {
  // Populate skills
  skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("col-lg-6");
    skillElement.setAttribute("data-aos", "fade-up");
    skillElement.innerHTML = `
      <div class="progress">
        <span class="skill">${skill.name} <i class="val">${skill.progress}%</i></span>
        <div class="progress-bar-wrap">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="${skill.progress}"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: ${skill.progress}%"
          ></div>
        </div>
      </div>
    `;

    const skillsContent = document.querySelector(".skills-content");
    if (skillsContent) {
      skillsContent.appendChild(skillElement);
    }
  });

  projectData.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add(
      "col-lg-4",
      "col-md-6",
      "portfolio-item",
      "filter-web"
    );
    projectElement.innerHTML = `
      <div class="portfolio-wrap">
        <img
          src="${project.image}"
          class="w-100 portfolio-img-hw"
          alt="${project.alt}"
        />
        <div class="portfolio-links">
          <a
            href='${project.image}'
            data-gall="portfolioGallery"
            class="venobox"
            title="Poster"
          >
            <i class="bx bx-search"></i>
          </a>
          <a href="#" class="more-details-link" data-index="${index}" title="More Details">
            <i class="bx bx-link"></i>
          </a>
        </div>
      </div>
    `;
    const portfoliocontainer = document.querySelector(".portfolio-container");

    portfoliocontainer.appendChild(projectElement);
  });

  const modal = document.getElementById("project-modal");
  const modalLabel = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalTech = document.getElementById("tech");
  const modalClose = document.querySelector(".modal-close");

  document.querySelectorAll(".more-details-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const index = this.getAttribute("data-index");
      const project = projectData[index];

      modalLabel.textContent = project.alt;
      modalDetails.textContent = project.details;
      modalTech.textContent = project.tech;

      modal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
