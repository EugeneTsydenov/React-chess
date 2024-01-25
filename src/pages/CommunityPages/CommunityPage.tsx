import {FC} from 'react';
import Layout from "../../layouts/Layout.tsx";
import {observer} from "mobx-react-lite";
import store from "../../store/store.ts";

const CommunityPage: FC = observer(() => {
	return (
		<Layout>
			<main>
				{store.user.displayName}
			</main>
		</Layout>
	);
});

export default CommunityPage;