import dynamic from "next/dynamic";
import { Spin, Result } from "antd";

interface Props {
  route: string;
}
const SwitchComponents = ({ route }: Props) => {
  try {
    const Article = dynamic(
      () =>
        import(`../components/${route}`).catch((err) => {
          return () => <StatusWrong />;
        }),
      {
        loading: () => (
          <div
            style={{
              width: "100%",
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin tip="Loading..."></Spin>
          </div>
        ),
      }
    );
    return <Article />;
  } catch (error) {
    return <StatusWrong />;
  }
};

const StatusWrong = () => (
  <Result status="500" title="500" subTitle="Sorry, something went wrong." />
);
export default SwitchComponents;
