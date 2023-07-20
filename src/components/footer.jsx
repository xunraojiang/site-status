import CustomLink from "@/components/customLink";
import Package from "../../package.json";
import { GithubOne, Home, Mail } from "@icon-park/react";

const Footer = () => {
  // 加载配置
  const githubName = import.meta.env.VITE_GITHUB_NAME;
  const homeUrl = import.meta.env.VITE_HOME_URL;
  const emailUrl = import.meta.env.VITE_EMAIL_URL;

  return (
    <footer id="footer">
      <div className="social">
        <CustomLink
          iconDom={<GithubOne />}
          to={`https://github.com/${githubName}/`}
        />
        <CustomLink iconDom={<Home />} to={homeUrl} />
        <CustomLink iconDom={<Mail />} to={`mailto:${emailUrl}`} />
      </div>
      <div className="text">
        <p>
          <CustomLink
            text={Package.alia}
            to="https://github.com/imsyy/site-status"
          />
          &nbsp;Version&nbsp;{Package.version}
        </p>
        <p>
          基于&nbsp;
          <CustomLink to="https://uptimerobot.com/" text="UptimeRobot" />
          &nbsp;接口&nbsp;|&nbsp;检测频率 5 分钟
        </p>
        <p>
          Copyright&nbsp;&copy;&nbsp;2020&nbsp;-&nbsp;{new Date().getFullYear()}
          &nbsp;
          <CustomLink to="https://www.imsyy.top/" text="無名" />
          &nbsp;|&nbsp;
          <CustomLink
            to="https://beian.miit.gov.cn/"
            text="豫ICP备2022018134号-1"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;