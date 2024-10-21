import LandingKeyFetures from './LandingKeyFetures';
import LandingSave from './LandingSave';
import LandingSizes from './LandingSizes';
import LandingVideoPlayer from './LandingVideoPlayer';

const LandingDescription = ({landing}) => {
    const {
        section_three_video,
        section_three_key_feature,
        section_three_offer_order,
        section_four_available_size,
    } = landing || {};
    return (
        <div className="mb-[60px]">
            <div className="container grid justify-center">
                <div className="max-w-[970px]">
                    {section_three_video && <LandingVideoPlayer
                        videoUrl={section_three_video}
                    />}
                    {section_three_key_feature && <LandingKeyFetures
                        section_three_key_feature={section_three_key_feature}
                    />}
                    {section_three_offer_order && <LandingSave
                        section_three_offer_order={section_three_offer_order}
                    />}
                    {section_four_available_size && <LandingSizes
                        section_four_available_size={
                            section_four_available_size
                        }
                    />}
                </div>
            </div>
        </div>
    );
};

export default LandingDescription;
