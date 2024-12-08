import type { Section } from '../types';

export const predefinedSections: Omit<Section, 'id'>[] = [
  {
    title: 'Introduction',
    content: '<p>This Agreement is made and entered into as of [date] by and between [Party A] and [Party B], collectively referred to as "the Parties." This Agreement outlines the terms and conditions for [specific purpose].</p>',
    type: 'predefined'
  },
  {
    title: 'Definitions',
    content: '<p>For the purposes of this Agreement:</p><ul><li>"Effective Date" refers to the date the Agreement comes into force.</li><li>"Confidential Information" means any non-public information shared between the Parties.</li></ul>',
    type: 'predefined'
  },
  {
    title: 'Scope of Work/Services',
    content: '<p>Party A agrees to provide the following services: [List of services]. Party B agrees to compensate Party A as described in the Payment Terms section.</p>',
    type: 'predefined'
  },
  {
    title: 'Payment Terms',
    content: '<p>Party B shall pay Party A a total of [amount] in [installments/full payment], payable by [date]. Payments shall be made via [payment method, e.g., bank transfer].</p>',
    type: 'predefined'
  },
  {
    title: 'Confidentiality Clause',
    content: '<p>Both Parties agree to maintain the confidentiality of all proprietary and sensitive information disclosed during the term of this Agreement. This obligation shall survive the termination of the Agreement.</p>',
    type: 'predefined'
  },
  {
    title: 'Termination Clause',
    content: '<p>This Agreement may be terminated by either Party with [number of days] written notice, or immediately upon breach of any material term by the other Party.</p>',
    type: 'predefined'
  },
  {
    title: 'Dispute Resolution',
    content: '<p>In the event of a dispute, the Parties agree to first attempt resolution through mediation. If unresolved, disputes shall be subject to binding arbitration under the rules of [governing body].</p>',
    type: 'predefined'
  },
  {
    title: 'Governing Law',
    content: '<p>This Agreement shall be governed by and construed in accordance with the laws of [State/Country].</p>',
    type: 'predefined'
  },
  {
    title: 'Force Majeure',
    content: '<p>Neither Party shall be liable for delays or failures in performance resulting from events beyond their reasonable control, including natural disasters, war, or government restrictions.</p>',
    type: 'predefined'
  },
  {
    title: 'Signatures',
    content: '<p>IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.</p>',
    type: 'predefined'
  },
  {
    title: 'Warranties and Representations',
    content: '<p>Party A warrants that it has the necessary rights and authority to enter into this Agreement and perform its obligations as specified herein.</p>',
    type: 'predefined'
  },
  {
    title: 'Indemnification Clause',
    content: '<p>Party A agrees to indemnify and hold harmless Party B against any claims, losses, or damages arising from Party A\'s actions.</p>',
    type: 'predefined'
  },
  {
    title: 'Amendments',
    content: '<p>Any amendments to this Agreement must be made in writing and signed by both Parties.</p>',
    type: 'predefined'
  },
  {
    title: 'Non-Compete Clause',
    content: '<p>Party B agrees not to engage in any business that directly competes with Party A\'s operations for a period of [timeframe].</p>',
    type: 'predefined'
  },
  {
    title: 'Miscellaneous Provisions',
    content: '<p>This Agreement constitutes the entire agreement between the Parties and supersedes all prior understandings or agreements.</p>',
    type: 'predefined'
  },
  {
    title: "Representations and Warranties",
    content: `<h3>Representations and Warranties</h3>
      <p>Each Party represents and warrants that:</p>
      <ol>
        <li>It has full power and authority to enter into this Agreement;</li>
        <li>Its performance of this Agreement will not violate any other agreement;</li>
        <li>It will comply with all applicable laws and regulations.</li>
      </ol>`,
    type: "predefined"
  },
  {
    title: "Term and Termination",
    content: `<h3>Term and Termination</h3>
      <p>This Agreement shall commence on the Effective Date and continue until:</p>
      <p>□ _____________ [specific date]</p>
      <p>□ Completion of Services</p>
      <p>□ Other: _____________</p>`,
    type: "predefined"
  }
];