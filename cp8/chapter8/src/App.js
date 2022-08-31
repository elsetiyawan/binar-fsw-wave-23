import { Link, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import SingleBlogPost from "./pages/Blogs/SingleBlogPost";
import Counting from "./pages/Counter/Counting";
import Counting2 from "./pages/Counter/Counting2";
import LayoutCounting from "./pages/Counter/LayoutCounting";
import Education from "./pages/Education";
import Identity from "./pages/Identity";
import AppLayout from "./pages/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<div>Halaman login pertama</div>} />
        <Route path="/" element={<AppLayout />}>
          <Route
            path="/identity"
            element={
              <Identity user={{ name: "El Setiyawan", address: "Jogja" }} />
            }
          />
          <Route
            path="/education"
            element={
              <Education
                educations={{
                  univ: "UMY",
                  jurusan: "Hubungan International",
                }}
              />
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:postId" element={<SingleBlogPost />} />
          <Route path="/counter" element={<LayoutCounting />}>
            <Route path="version1" element={<Counting startNumber={0} />} />
            <Route path="version2" element={<Counting2 startNumber={0} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
