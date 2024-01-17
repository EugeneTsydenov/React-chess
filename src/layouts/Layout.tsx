import {FC, ReactNode} from "react";
import Header from "../components/Header/Header.tsx";

interface LayoutProps {
	children: ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {

	return (
		<>
			<Header/>
			{children}
		</>
	);
};

export default Layout;