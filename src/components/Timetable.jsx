import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
// import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import "../styles/Table.css";

export const Timetable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
      id="course">

      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <div className="w-full max-w-[1150px] flex justify-center bg-customDarkBg1 pt-12 lg:pt-12 pb-4 lg:pb-10 mx-auto flex-col">
          <div className="w-full flex flex-col items-center">
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              專業知識密集課程（暫定）
            </h2>
          </div>
          <div className="w-full overflow-x-auto"> {/* 添加 overflow-x-auto */}
            <MyTable />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
const MyTable = () => {
  return (
    <table className="GeneratedTable">
      <thead>
        <tr>
          <th rowSpan="2"></th>
          <th colSpan="2">1/27 (六)</th>
          <th>1/28 (日)</th>
          <th colSpan="2">1/29 (一)</th>
        </tr>
        <tr>
          <th>營隊基礎課程</th>
          <th>競賽訓練進階課程</th>
          <th>所有人</th>
          <th>營隊基礎課程</th>
          <th>競賽訓練進階課程</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00~9:30</td>
          <td colSpan="2">報到</td>
          <td rowSpan="2">SCC 座談會</td>
          <td colSpan="2" rowSpan="3">國網中心參訪</td>
        </tr>
        <tr>
          <td>9:30~10:00</td>
          <td colSpan="2">開幕介紹</td>
        </tr>
        <tr>
          <td>10:00~12:00</td>
          <td colSpan="2">高效能計算與平行程式簡介</td>
          <td>超級電腦實操</td>
        </tr>
        <tr>
          <td>12:00~13:30</td>
          <td colSpan="5">午餐、休息</td>
        </tr>
        <tr>
          <td>13:30~14:30</td>
          <td colSpan="2">連線至台灣杉一號</td>
          <td rowSpan="5">平行程式教學</td>
          <td colSpan="2">計算效能分析量測</td>
        </tr>
        <tr>
          <td>14:30~15:30</td>
          <td rowSpan="2">Linux 的操作與使用</td>
          <td rowSpan="4">應用程式的<br />編譯與連結</td>
          <td>分組討論報告</td>
          <td rowSpan="3">補助工具</td>
        </tr>
        <tr>
          <td>15:30~16:00</td>
          <td>系所介紹</td>
        </tr>
        <tr>
          <td>16:00~16:30</td>
          <td rowSpan="2">校園參訪</td>
          <td>結業合照</td>
        </tr>
        <tr>
          <td>16:30~17:00</td>
          <td rowSpan="3"></td>
          <td>課後作業說明</td>
        </tr>
        <tr>
          <td>17:00~18:30</td>
          <td colSpan="3">晚餐、休息</td>
          <td rowSpan="2"></td>
        </tr>
        <tr>
          <td>18:30~21:30</td>
          <td>HW1-1<br />Linux 程式設計</td>
          <td>HW1-2<br />應用程式安裝</td>
          <td>HW2<br />MPI &amp; OpenMP<br />程式設計</td>
        </tr>
      </tbody>
    </table>
  );
};

// const MyTable = () => {
//   return (
//     <table className="GeneratedTable">
//       <thead>
//         <tr>
//           <th> </th>
//           <th colSpan="2" align="center">Day1.  7/28 (日)</th>
//           <th colSpan="2" align="center">Day2.  7/29 (一)</th>
//           <th colSpan="1" align="center">Day3.  7/30 (二)</th>
//           <th colSpan="1" align="center">Day4.  7/31 (三)</th>
//           <th colSpan="1" align="center">Day5.  8/1 (四)</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//             <td align="center">活動地點</td>
//             <td align="center">綜四223</td>
//             <td align="center">綜四224</td>
//             <td align="center">綜四223</td>
//             <td align="center">綜四224</td>
//             <td align="center">綜四224</td>
//             <td align="center">綜四224</td>
//             <td align="center">資電館107、國網中心 </td>
//         </tr>
//         <tr>
//             <td align="center">9:00~9:30</td>
//             <td colSpan="2" align="center">報到</td>
//             <td colSpan="2" rowSpan="2" align="center">超級電腦簡介與實操</td>
//             <td rowSpan="2" align="center">業界神秘嘉賓#2</td>
//             <td colSpan="1" rowSpan="3" align="center">深度學習簡介</td>
//             <td colSpan="1" rowSpan="3" align="center">競賽成果發表 </td>
//         </tr>
//         <tr>
//             <td align="center">9:30~10:30</td>
//             <td colSpan="2" align="center">開幕</td>
//         </tr>
//         <tr>
//             <td align="center">10:30~12:00</td>
//             <td colSpan="2" align="center">平行計算簡介(基礎)</td>
//             <td colSpan="2" align="center">業界神秘嘉賓#1</td>
//             <td align="center">效能分析</td>
//         </tr>
//         <tr>
//             <td align="center">12:00~13:30</td>
//             <td colSpan="7" align="center">午餐 (自理)</td>
//         </tr>
//         <tr>
//             <td align="center">13:30~15:00</td>
//             <td colSpan="2" align="center">Python環境安裝簡介</td>
//             {/* <td align="center">平行計算簡介(進階)</td> */}
//             <td colSpan="2" align="center">學生叢集競賽座談會</td>
//             <td align="center">效能競賽</td>
//             <td rowSpan="1" align="center">科學計算簡介</td>
//             <td rowSpan="2" align="center">國網中心參訪</td>
//         </tr>
//         <tr>
//             <td align="center">15:00~16:00</td>
//             <td colSpan="2" rowSpan="2" align="center">平行程式(CPU)</td>
//             <td colSpan="2" rowSpan="2" align="center">平行程式(GPU)</td>
//             <td rowSpan="2" align="center">程式競賽</td>
//             <td align="center">人工智慧簡介</td>
//         </tr>
//         <tr>
//             <td align="center">16:00~17:30</td>
//             <td align="center">AI/科學應用競賽</td>
//             <td align="center">返校、競賽頒獎 </td>
//         </tr>
//         <tr>
//             <td align="center">17:30~19:00</td>
//             <td colSpan="2" align="center"><em>Pizza, my friends. 🤌🍕</em></td>
//             <td colSpan="1" align="center">系所介紹晚宴(限高中生)</td>
//             <td colSpan="3" align="center">晚餐(自理)</td>
//             <td rowSpan="2"> </td>
//         </tr>
//         <tr>
//             <td align="center">19:00~21:30</td>
//             <td colSpan="2" align="center">平行程式實操(CPU)</td>
//             <td align="center">平行程式實操(GPU)</td>
//             <td align="center">進階平行程式實操(GPU)</td>
//             <td align="center">程式競賽</td>
//             <td align="center">AI/科學應用競賽</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

export default MyTable;
