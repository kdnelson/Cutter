import './App.scss';
import Cutter from './widgets/cutter';

function App() {
  return (
    <div className="cutter-main-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="cutter-main-banner-content">
            <div className="row">
              <h5 className="cutter-main-banner-agent-heading">
                USCG Cutter Skippy
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="mountains" alt="" />
      <div className="cutter row-flex" alt="">
        <Cutter width="250" />
      </div>
      <div className="bottom-waves" alt=""/>

      <div>{screenSize <= XS (<div className=".media-size-x-small"/>)}</div>
      <div>{screenSize > XS && screenSize <= S (<div className=".media-size-small"/>)}</div>
      <div>{screenSize > S && screenSize <= M (<div className=".media-size-medium"/>)}</div>
      <div>{screenSize > M && screenSize <= XL (<div className=".media-size-x-large"/>)}</div>
    </div>
  );
}

export default App;


// import './BoatMainPageBanner.scss';

// import { TABLET_MAX_MEDIA_WIDTH } from '../../../../constants';

// import PropTypes from 'prop-types';

// import { BannerButtonCard } from '../BannerButtonCard/BannerButtonCard';

// import { useTranslation } from 'react-i18next';

// import { policyIconNameMap } from '../../../../utils';

// import Boat from './../../../../assets/widgets/Boat';

 

// export const BoatMainPageBanner = (props) => {

//   const {

//     name,

//     lob,

//     agentName,

//     agencyName,

//     agencyPhone,

//     agencyEmail,

//     effectiveDate,

//     expireDate,

//     screenSize,

//   } = props ?? {};

//   const { t } = useTranslation();

//   const handlePrintClick = () => {

//     setTimeout(() => {

//       window.print();

//     }, 3000);

//   };

//   let formatPhone = '';

//   agencyPhone !== null &&

//     (formatPhone = `${agencyPhone?.slice(0, 7)}-${agencyPhone?.slice(7, 11)}`);

//   return (

//     <div data-testid="backgroundDetails" className="boat-main-banner">

//       <div className="tds-container">

//         <div className="tds-row">

//           <div className="tds-col-md-10 tds-mx-auto">

//             <div className="boat-main-banner-content">

//               <div className="tds-row">

//                 <h1

//                   data-testid="boat-main-greeting-text"

//                   className="tds-h1--slab tds-h1--small

//                   tds-h1--semibold quote-color"

//                 >

//                   {name}, your {lob?.toLowerCase()} policy quote is ready!

//                 </h1>

//               </div>

//               <div className="tds-row">

//                 <h2 data-testid="boat-main-sub-greeting-text">

//                   {"We've"} got you covered every day and when it matters most.

//                 </h2>

//               </div>

//               <div className="tds-row">

//                 <h5

//                   className="tds-mt-s tds-mb-s boat-main-banner-agent-heading"

//                   data-testid="boat-main-agent-heading"

//                 >

//                   {t('yourQuote.agentDetail')}

//                 </h5>

//               </div>

//               {agentName && (

//                 <div className="tds-row" data-testid="boat-main-agent-name">

//                   {agentName}

//                 </div>

//               )}

//               {agencyName && (

//                 <div

//                   className="tds-row tds-mb-xxs"

//                   data-testid="boat-main-agency-name"

//                 >

//                   {agencyName}

//                 </div>

//               )}

//               {agencyPhone && (

//                 <div className="tds-row">

//                   <div className="tds-mr-xxxs">{policyIconNameMap.Phone}</div>

//                   <a

//                     data-testid="boat-main-agent-phone"

//                     href={'tel:' + formatPhone}

//                     alt=""

//                   >

//                     {formatPhone}

//                   </a>

//                 </div>

//               )}

//               {agencyEmail && (

//                 <div className="tds-row">

//                   <div className="tds-mr-xxxs">

//                     {policyIconNameMap.Envelope}

//                   </div>

//                   <a

//                     data-testid="boat-main-agent-email"

//                     href={'mailto:' + agencyEmail}

//                     alt=""

//                  >

//                     {agencyEmail}

//                   </a>

//                 </div>

//               )}

//               <div className="tds-row">

//                 <div

//                   data-testid="boat-main-coverage-date-text"

//                   className="tds-mt-m tds-x-small boat-main-date-card"

//                 >

//                   {t('coverages.effective') + ' '}

//                   {effectiveDate}

//                   &ensp;

//                   <span aria-label="to">{policyIconNameMap.ArrowRight}</span>

//                   &ensp;

//                   {expireDate}

//                 </div>

//               </div>

//               {screenSize >= TABLET_MAX_MEDIA_WIDTH ? (

//                 <div className="tds-row tds-mt-m">

//                   <div

//                     data-testid="boat-main-banner-btn-card-for-print"

//                     className="tds-mr-l"

//                   >

//                     <BannerButtonCard

//                       buttonType="print"

//                       description={t('header.BoatPrint')}

//                       handlePrintClick={handlePrintClick}

//                     />

//                   </div>

//                   <div data-testid="boat-main-banner-btn-card-for-msg">

//                     <BannerButtonCard

//                       buttonType="message"

//                       description={t('header.messageAgent')}

//                       handlePrintClick={handlePrintClick}

//                     />

//                   </div>

//                 </div>

//               ) : (

//                 <div className="tds-mt-m tds-d-flex tds-flex-row tds-justify-content-center">

//                   <div className="tds-row">

//                     <div className="tds-col">

//                       <div className="tds-row tds-justify-content-center">

//                         <BannerButtonCard

//                           buttonType="print"

//                           description={t('header.BoatPrint')}

//                           handlePrintClick={handlePrintClick}

//                         />

//                       </div>

//                       <div className="tds-row tds-justify-content-center">

//                         <BannerButtonCard

//                           buttonType="message"

//                           description={t('header.messageAgent')}

//                           handlePrintClick={handlePrintClick}

//                         />

//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//       <div

//         data-testid="boat-main-page-top-mountains"

//         className="mountains"

//         alt=""

//       />

//       <div

//         data-testid="boat-main-page-flex-boat"

//         className="boat tds-d-inline-flex"

//         alt=""

//       >

//         <Boat width="250" />

//       </div>

//       <div

//         data-testid="boat-main-page-bottom-waves"

//         className="bottom-waves"

//         alt=""

//       />

//     </div>

//   );

// };

 

// BoatMainPageBanner.propTypes = {

//   generalInfo: PropTypes.object,

//   screenSize: PropTypes.any,

// };
