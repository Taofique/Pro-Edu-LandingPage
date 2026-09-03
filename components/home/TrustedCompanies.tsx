import Container from "../shared/Container";

import coursera from "../../app/assets/companies/coursera.svg";
import elecom from "../../app/assets/companies/Elecom.svg";
import indeed from "../../app/assets/companies/Indeed.svg";
import education from "../../app/assets/companies/Education.svg";
import fedex from "../../app/assets/companies/fedEx.svg";
import udemy from "../../app/assets/companies/udemy.svg";

const companies = [
  { id: 1, name: "Coursera", logo: coursera },
  { id: 2, name: "FedEx", logo: fedex },
  { id: 3, name: "Indeed", logo: indeed },
  { id: 4, name: "Elecom", logo: elecom },
  { id: 5, name: "Education", logo: education },
  { id: 6, name: "Udemy", logo: udemy },
];

export default function TrustedCompanies() {
  return (
    <section className="py-12 lg:py-20 overflow-hidden">
      <Container>
        <div className="mb-[50px] text-center">
          <h2 className="font-sans text-[32px] font-semibold leading-[45px] text-dark-01 sm:text-[38px] lg:text-[45px]">
            Trusted by over 800+ companies
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="trusted-companies-track">
            {[0, 1].map((set) => (
              <div key={set} className="trusted-companies-group">
                {companies.map((company) => (
                  <div
                    key={`${set}-${company.id}`}
                    className="trusted-companies-item"
                  >
                    <img src={company.logo} alt={company.name} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
