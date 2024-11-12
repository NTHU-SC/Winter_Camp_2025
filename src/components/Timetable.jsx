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
          <th> </th>
          <th>第一天 1/22 (三)</th>
          <th>第二天 1/23 (四)</th>
          <th>第三天 1/24 (五)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00~9:30</td>
          <td>報到</td>
          <td rowSpan="2">學生叢集競賽座談</td>
          <td rowSpan="3">國網參訪 <br></br>(大型語言模型專題演講)</td>
        </tr>
        <tr>
          <td>9:30~10:00</td>
          <td>開幕</td>
        </tr>
        <tr>
          <td>10:00~12:00</td>
          <td>高效能計算簡介</td>
          <td>超級電腦簡介實操</td>
        </tr>
        <tr>
          <td>12:00~13:30</td>
          <td>午餐</td>
          <td>午餐</td>
          <td>午餐</td>
        </tr>
        <tr>
          <td>13:30~14:30</td>
          <td rowSpan="3">Linux簡介實操</td>
          <td rowSpan="4">平行程式教學</td>
          <td>計算效能量測分析</td>
        </tr>
        <tr>
          <td>14:30~15:30</td>
          <td>系所介紹</td>
        </tr>
        <tr>
          <td>15:30~16:30</td>
          <td>頒發證書、歸賦</td>
        </tr>
        <tr>
          <td>16:30~17:30</td>
          <td>校園參訪</td>
          <td rowSpan="3"></td>
        </tr>
        <tr>
          <td>17:30~19:00</td>
          <td>晚餐</td>
          <td>晚餐</td>
        </tr>
        <tr>
          <td>19:00~21:30</td>
          <td>Linux 實戰練習</td>
          <td>平行程式實戰練習</td>
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
