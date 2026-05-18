import {Route, Routes} from "react-router-dom";
import Home from "@/presentations/pages/Home";
import PrivacyPolicyPage from "@/presentations/pages/PrivacyPolicyPage";
import NotFoundPage from "@/presentations/pages/NotFoundPage";

function App() {
    // ルーティングのホスト。HashRouter 配下なので
    // 直アクセス・リロードでも常に index.html (HTTP 200) で解決される。
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/privacy/:slug" element={<PrivacyPolicyPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
