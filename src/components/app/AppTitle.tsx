import { Helmet } from "react-helmet";

type AppTitleProps = {
  title: string;
};

const AppTitle: React.FC<AppTitleProps> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default AppTitle;
