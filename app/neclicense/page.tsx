import NECCourse from "@/app/neclicense/ui/neclicense";
import neclicense from "./data/neclicense";
import Neclicenseui from "./ui/neclicense";
const page = async() => {
    const data = await neclicense();
    console.log(data);
    return (
        <div className="MAIN-PAGE">
            <NECCourse/>
        </div>
    );
}

export default page;