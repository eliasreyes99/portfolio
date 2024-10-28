import { useEffect, useRef, useState } from "react";
import { Mail, MailOpen } from "lucide-react";
import "../css/SimplePopover.css";

const SimplePopover = ({ children }) => {
  const [visible, setVisible] = useState("false");
  const popoverRef = useRef(false);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className="mail" onClick={() => setVisible(!visible)}>
        {visible && <Mail size={30} color="black" />}
        {!visible && <MailOpen size={30} color="black"/> }
        
      </button>
      {!visible && (
        <div>
          <div ref={popoverRef} className="popover">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
export default SimplePopover;
