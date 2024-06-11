import React from "react";
import "./App.css";
import Liahona from "./Components/Liahona";
import Header from "./Components/Header";
import SubscriptionInfo from "./Components/SubscriptionInfo";
import Address from "./Components/Address";
import Language from "./Components/Language";
import Active from "./Components/Active";
import Stack from "@churchofjesuschrist/eden-stack";
import Type from "./Components/Type";
import { Checkbox } from "@churchofjesuschrist/eden-form-parts";
import { Divider } from "@churchofjesuschrist/eden-vertical-modular-tile";

export const StringContext = React.createContext();

export const PageDataContext = React.createContext();

let pageData = {
  magazinesSubscriptions: [
    {
      type: "Liahona",
      subscribed: true,
      active: [
        { lang: "eng", expireDate: "2023-12-01", quantity: 1 },
        { lang: "spa", expireDate: "2024-11-01", quantity: 1 },
      ],
      expired: [],
    },
    {
      type: "LiahonaGCOnly",
      subscribed: true,
      active: [{ lang: "eng", expireDate: "2023-11-01", quantity: 2 }],
      expired: [],
    },
    {
      type: "Friend",
      subscribed: true,
      active: [],
      expired: [
        { lang: "spa", expireDate: "2022-11-01", quantity: 2 },
        { lang: "spa", expireDate: "2022-09-01", quantity: 2 },
      ],
    },
  ],
  emailSubscriptions: [
    { type: "Magazine", text: "Text", email: "Email" },
    { type: "Liahona", text: true, email: false },
    { type: "YA Weekly", text: true, email: true },
    { type: "For the Strength of Youth", text: false, email: true },
    { type: "Friend", text: false, email: false },
  ],
  address: {
    street: "50 E North Temple",
    city: "Salt Lake City",
    state: "UT",
    zip: "84150",
  },
  emailReminders: false,
};

let initialState = {
  HeaderInfo:
    "Print magazine subscription are now for 1 year and will need to be renewed each year. Your subscription will include 6 or 12 issues per year depending on the language you selected. Each household can receive one subscription per magazine per year at no-cost. If you desire additional magazines you can purchase single issues at the Store(provide link).",
  HeaderInfo1:
    "Receive a monthly notification when the new issue of a magazine is released on the Gospel Library App or the Gospel Library online.",
  HeaderInfo2: "Select one or more boxes below to subscribe",
  Title: "Magazine Subscriptions",
  Title2: "Notifiations for Online Magazines",
  Magazine: "Liahona",
  Magazine2: "Liahona General Conference Issues (ONLY)",
  Magazine_Description:
    "Official magazine for adult Church Members worldwide, offering teachings from Church leaders, inspiring stories, and articles that supplement Come, Follow Me.",
  Magazine_Description2:
    "This is for the May and November General Conference issues (ONLY).",
  Magazine_Subscription: "Subscribed",
  Active_Subscription: "Subscribe",
  Active_Unsubscribe: "Unsubscribe",
  Active_Title: "Active",
  Active_Title3: "Expired",
  Active1Data_Name: "Liahona",
  Active2Data_Name: "Liahona-GCI",
  Active1Data_Expiration: "Expires",
  Active1Data_Language: "English",
  Active1Data_Language2: "Spanish",
  Active2Data_Language: "English x2",
  Active1Data_Date: "Dec,2023",
  Active1Data_Date2: "Nov,2024",
  Active2Data_Date: "Nov,2023",
  ExpiredData_Name: "Friend",
  ExpiredData_Expiration: "Expired",
  ExpiredData_Language: "Spanish x2",
  ExpiredData_Date: "Sept,2022",
  Drawer_AddAdditional: "Add Additional",
  Drawer_Submit: "Submit",
  Drawer_Cancel: "Cancel",
  Drawer_Header: "Liahona Magazine",
  Drawer_Name: "Name",
  Drawer_DateOfBirth: "Date of Birth",
  Drawer_Username: "Username",
  Drawer_Password: "Password",
  Magazine_type: "Magazine",
  Text_type: "Text",
  Email_type: "Email",
  Magazine_type2: "Liahona",
  Magazine_type3: "YA Weekly",
  Magazine_type4: "For the Strength of Youth",
  Magazine_type5: "Friend",
  SubscriptionInfo: "Subscription Information",
  Address: "Shipping Address",
  Street: "55-600 Naniloa Loop",
  City: "Laie",
  State: "HI",
  Zip: "96762",
  Select_language: "Select Language",
  Language: "Select Language",
  English: "English",
  Spanish: "Spanish",
  Portuguese: "Portuguese",
  French: "French",
  German: "German",
  Italian: "Italian",
  Japanese: "Japanese",
  Korean: "Korean",
  Chinese: "Chinese",
  Russian: "Russian",
  Dutch: "Dutch",
  Arabic: "Arabic",
  Vietnamese: "Vietnamese",
  Thai: "Thai",
  Tagalog: "Tagalog",
  Indonesian: "Indonesian",
  Hindi: "Hindi",
  Bengali: "Bengali",
  Urdu: "Urdu",
  Turkish: "Turkish",
  Persian: "Persian",
  Swahili: "Swahili",
  Amharic: "Amharic",
  Tigrinya: "Tigrinya",
  Nepali: "Nepali",
  Mongolian: "Mongolian",
  Burmese: "Burmese",
  Khmer: "Khmer",
  Malay: "Malay",
  Fijian: "Fijian",
  Samoan: "Samoan",
  Tongan: "Tongan",
  Hawaiian: "Hawaiian",
  Marshallese: "Marshallese",
  Chuukese: "Chuukese",
  Pohnpeian: "Pohnpeian",
  Kosraean: "Kosraean",
  Save_Subscription_Preferences: "Save Subscription Preferences",
  Email_Renewel: "Email Renewel Reminder",
  Email_Renewel_Description: "Add your email here.",
  Email_Checkbox: "Please send me an email reminder",
};

function App() {
  const Active1Data = [
    {
      name: "Liahona",
      date: "Dec,2023",
      language: "English",
      status: "Expires",
    },
    {
      name: "Liahona",
      date: "Nov,2024",
      language: "Spanish",
      status: "Expires",
    },
  ];

  const Active2Data = [
    {
      name: "Liahona-GCI",
      date: "Nov,2023",
      language: "English x2",
      status: "Expires",
    },
  ];

  const ExpiredData = [
    {
      name: "Friend",
      date: "Nov,2022",
      language: "Spanish x2",
      status: "Expired",
    },
    {
      name: "Friend",
      date: "Sept,2022",
      language: "Spanish",
      status: "Expired",
    },
  ];

  const activeLiahona = pageData.magazinesSubscriptions.filter(
    (element) => element.type === "Liahona"
  );

  const activeLiahonaGCOnly = pageData.magazinesSubscriptions.filter(
    (element) => element.type === "LiahonaGCOnly"
  );

  const expiredFriend = pageData.magazinesSubscriptions.filter(
    (element) => element.type === "Friend"
  );

  const typeLiahona = pageData.emailSubscriptions.filter(
    (element) => element.type === "Liahona"
  );

  const typeYaWeekly = pageData.emailSubscriptions.filter(
    (element) => element.type === "YA Weekly"
  );

  const typeStrengthOfYouth = pageData.emailSubscriptions.filter(
    (element) => element.type === "For the Strength of Youth"
  );

  const typeFriend = pageData.emailSubscriptions.filter(
    (element) => element.type === "Friend"
  );

  const typeMagazine = pageData.emailSubscriptions.filter(
    (element) => element.type === "Magazine"
  );

  return (
    <PageDataContext.Provider value={pageData}>
      <StringContext.Provider value={initialState}>
        <Stack
          style={{
            width: "90vw",
            maxWidth: "840px",
          }}
        >
          <Header
            showMessage={true}
            title={initialState.Title}
            message={initialState.HeaderInfo}
          />

          <Liahona
            title={initialState.Magazine}
            showInfo={true}
            imageSrc={"images/Liahona.jpeg"}
            message={initialState.Magazine_Description}
          />
          <Active title={initialState.Active_Title} data={activeLiahona} />

          <Liahona
            title={initialState.Magazine2}
            imageSrc={"images/Liahona2.jpeg"}
            message={initialState.Magazine_Description2}
          />

          <Active
            title={initialState.Active_Title}
            data={activeLiahonaGCOnly}
          />
          <Active title={initialState.Active_Title3} data={expiredFriend} />

          <Header
            title={initialState.Title2}
            message={initialState.HeaderInfo1}
          />
          <Header message={initialState.HeaderInfo2} />
          <Type emailInfo={typeMagazine} Text="Text" Email="Email" />
          <Type
            emailInfo={typeLiahona}
            Text={<Checkbox checked={true} />}
            Email={<Checkbox checked={false} />}
          />
          <Divider inset />
          <Type
            emailInfo={typeYaWeekly}
            Text={<Checkbox checked={true} />}
            Email={<Checkbox checked={true} />}
          />
          <Divider inset />
          <Type
            emailInfo={typeStrengthOfYouth}
            Text={<Checkbox checked={false} />}
            Email={<Checkbox checked={true} />}
          />
          <Divider inset />
          <Type
            emailInfo={typeFriend}
            Text={<Checkbox checked={false} />}
            Email={<Checkbox checked={false} />}
          />
          <Divider inset />

          <SubscriptionInfo SubscriptionInfo={initialState.SubscriptionInfo} />
          <Address
            street={pageData.address.street}
            city={pageData.address.city}
            state={pageData.address.state}
            zip={pageData.address.zip}
          />
          <Language />
        </Stack>
      </StringContext.Provider>
    </PageDataContext.Provider>
  );
}

export default App;
