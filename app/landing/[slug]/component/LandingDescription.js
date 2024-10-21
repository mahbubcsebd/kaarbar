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
                    <LandingVideoPlayer
                        // videoUrl='<iframe
                        //     width="560"
                        //     height="315"
                        //     src="https://www.youtube.com/embed/rc2TbBhRoG8?si=9zoVHWA3NoVGXKSg"
                        //     title="YouTube video player"
                        //     frameborder="0"
                        //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        //     referrerpolicy="strict-origin-when-cross-origin"
                        //     allowfullscreen
                        // ></iframe>'
                        videoUrl={section_three_video}
                    />
                    <LandingKeyFetures
                        section_three_key_feature={section_three_key_feature}
                    />
                    <LandingSave
                        section_three_offer_order={section_three_offer_order}
                    />
                    <LandingSizes
                        section_four_available_size={
                            section_four_available_size
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingDescription;
