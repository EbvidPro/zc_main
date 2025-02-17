import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
import CareersSection2 from './components/CareersSection2'
import Section3 from './components/Section3'
import SectionOne from './components/sectionOne'
import SearchSuggestion from '../searchSuggestion'

function Careers() {
  return (
    <div>
      <SearchSuggestion />
      <SectionOne />
      <CareersSection2 />
      <Section3 />
      <Message />
      <Footer />
    </div>
  )
}

export default Careers
