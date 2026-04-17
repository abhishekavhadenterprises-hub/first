import { ContainerScroll, ProcessCard, ProcessCardBody, ProcessCardTitle } from "@/app/components/ui/process-timeline"

const VALUES_PHASES = [
  {
    id: "value-1",
    title: "Excellence",
    description:
      "We strive for excellence in everything we do. Our commitment to quality drives us to continuously improve and deliver exceptional results that exceed expectations. We believe that excellence is not a destination but a continuous journey of growth and refinement.",
  },
  {
    id: "value-2",
    title: "Integrity",
    description:
      "Integrity is the foundation of our relationships. We act with honesty, transparency, and ethical principles in all our interactions. Building trust through consistent and responsible actions is central to our mission and values.",
  },
  {
    id: "value-3",
    title: "Innovation",
    description:
      "Innovation fuels our progress. We embrace creativity, encourage new ideas, and challenge conventional thinking. By fostering a culture of innovation, we empower our team to explore bold solutions and drive meaningful change.",
  },
  {
    id: "value-4",
    title: "Collaboration",
    description:
      "Together we achieve more. We value diverse perspectives, open communication, and teamwork. Through collaboration, we leverage collective strengths to overcome challenges and create lasting impact for our community and stakeholders.",
  },
]

export default function OurValuesSection() {
  return (
    <ContainerScroll>
      {VALUES_PHASES.map((phase) => (
        <ProcessCard key={phase.id}>
          <ProcessCardTitle>{phase.title}</ProcessCardTitle>
          <ProcessCardBody>{phase.description}</ProcessCardBody>
        </ProcessCard>
      ))}
    </ContainerScroll>
  )
}