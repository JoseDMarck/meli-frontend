import { Skeleton } from "antd";

function LoaderSkeleton() {
	return (
		<>
			<Skeleton active />
			<Skeleton active />
		</>
	);
}
const RenderLoader = ({ children, isTrue }) => {
	return isTrue ? children : <LoaderSkeleton />;
};
export default RenderLoader;
