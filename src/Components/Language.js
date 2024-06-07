import React from "react";
import { MultiSelect } from "@churchofjesuschrist/eden-form-parts";
import { useContext } from "react";
import { StringContext } from "../App";

const Language = () => {
  const value = useContext(StringContext);
  return (
    <div className="ml-3">
      <div className="select">
        <h4>{value.Select_language}</h4>

        <MultiSelect className="max-w-64">
          <option value="English">{value.English}</option>
          <option value="Spanish">{value.Spanish}</option>
          <option value="Portuguese">{value.Portuguese}</option>
          <option value="French">{value.French}</option>
          <option value="German">{value.German}</option>
          <option value="Italian">{value.Italian}</option>
          <option value="Japanese">{value.Japanese}</option>
          <option value="Korean">{value.Korean}</option>
          <option value="Chinese">{value.Chinese}</option>
          <option value="Russian">{value.Russian}</option>
          <option value="Dutch">{value.Dutch}</option>
          <option value="Arabic">{value.Arabic}</option>
          <option value="Vietnamese">{value.Vietnamese}</option>
          <option value="Thai">{value.Thai}</option>
          <option value="Tagalog">{value.Tagalog}</option>
          <option value="Indonesian">{value.Indonesian}</option>
          <option value="Hindi">{value.Hindi}</option>
          <option value="Bengali">{value.Bengali}</option>
          <option value="Urdu">{value.Urdu}</option>
          <option value="Turkish">{value.Turkish}</option>
          <option value="Persian">{value.Persian}</option>
          <option value="Swahili">{value.Swahili}</option>
          <option value="Amharic">{value.Amharic}</option>
          <option value="Tigrinya">{value.Tigrinya}</option>
          <option value="Nepali">{value.Nepali}</option>
          <option value="Mongolian">{value.Mongolian}</option>
          <option value="Burmese">{value.Burmese}</option>
          <option value="Khmer">{value.Khmer}</option>
          <option value="Malay">{value.Malay}</option>
          <option value="Fijian">{value.Fijian}</option>
          <option value="Samoan">{value.Samoan}</option>
          <option value="Tongan">{value.Tongan}</option>
          <option value="Hawaiian">{value.Hawaiian}</option>
          <option value="Marshallese">{value.Marshallese}</option>
          <option value="Chuukese">{value.Chuukese}</option>
          <option value="Pohnpeian">{value.Pohnpeian}</option>
          <option value="Kosraean">{value.Kosraean}</option>
        </MultiSelect>
        <div className="save">
          <button className="mt-11 rounded-none px-4 bg-gray-300">
            {value.Save_Subscription_Preferences}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
