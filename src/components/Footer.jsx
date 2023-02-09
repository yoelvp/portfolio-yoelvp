const Footer = () => {
  return (
    <footer className="py-8 flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between sm:gap-8">
      <p className="font-title text-xl">
        Yoel Valverde Polo
      </p>
      <ul className="flex flex-wrap justify-between gap-2">
        <li>
          <a
            href="https://www.linkedin.com/in/yoelvalverdepolo"
            target="_blank"
            rel="noreferrer noopener"
            className="link-hover"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yoelvp"
            target="_blank"
            rel="noreferrer noopener"
            className="link-hover"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/yoelvp73"
            target="_blank"
            rel="noreferrer noopener"
            className="link-hover"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
