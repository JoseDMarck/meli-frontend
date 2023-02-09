import { Skeleton } from "antd";

function LoaderSkeleton() {
	return (
		<>
			<Skeleton activate />
			<Skeleton activate />
		</>
	);
}
const RenderLoader = ({ children, isTrue }) => {
	return isTrue ? children : <LoaderSkeleton />;
};
export default RenderLoader;
