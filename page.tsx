import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Award, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export default function Page() {
  return (
    <div className={`min-h-screen bg-[#1E0B32] text-white ${spaceGrotesk.variable} font-sans`}>
      {/* Header */}
      <header className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="https://academy.ictcortex.me/wp-content/uploads/2021/09/cortex-svg-jodzi.svg"
            alt="ICT Cortex Kosovo"
            width={120}
            height={40}
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:text-[#FFD60A] text-sm font-bold">
            HOME
          </Link>
          <Link href="#" className="hover:text-[#FFD60A] text-sm font-bold">
            ACADEMIES
          </Link>
          <Link href="#" className="hover:text-[#FFD60A] text-sm font-bold">
            COURSES
          </Link>
          <Link href="#" className="hover:text-[#FFD60A] text-sm font-bold">
            BLOG
          </Link>
          <Link href="#" className="hover:text-[#FFD60A] text-sm font-bold">
            CAREER
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#1E0B32] border-[#c276f4]">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-lg hover:text-[#FFD60A] py-2 font-bold">
                HOME
              </Link>
              <Link href="#" className="text-lg hover:text-[#FFD60A] py-2 font-bold">
                ACADEMIES
              </Link>
              <Link href="#" className="text-lg hover:text-[#FFD60A] py-2 font-bold">
                COURSES
              </Link>
              <Link href="#" className="text-lg hover:text-[#FFD60A] py-2 font-bold">
                BLOG
              </Link>
              <Link href="#" className="text-lg hover:text-[#FFD60A] py-2 font-bold">
                CAREER
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Button className="hidden md:flex bg-[#FFD60A] text-black hover:bg-[#FFD60A]/90 rounded-full text-sm font-bold">
          Future Assistance
        </Button>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
        <div className="bg-[#c276f4] p-3 rounded-md mb-8 inline-block font-bold">
          Limited Time Offer: Save 450€ Today
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Career with Project Management Mastery</h1>
        <p className="text-lg mb-10 text-gray-300">
          Secure your future in just 3 months. Get hands-on training, guaranteed internship, and 1-on-1 career
          mentorship. <span className="font-bold">97% of our graduates are employed.</span> Will you be next?
        </p>
        <Button className="bg-[#FFD60A] text-black hover:bg-[#FFD60A]/90 rounded-full px-8 py-6 text-lg font-bold">
          CLAIM YOUR SPOT NOW
        </Button>

        {/* Course Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-16">
          <div className="bg-[#2A1245] p-6 first:rounded-l-lg last:rounded-r-lg border-r border-[#c276f4]">
            <div className="text-sm text-gray-400">Experience</div>
            <div className="font-bold">Beginner</div>
          </div>
          <div className="bg-[#2A1245] p-6 border-r border-[#c276f4]">
            <div className="text-sm text-gray-400">Length</div>
            <div className="font-bold">3 months</div>
          </div>
          <div className="bg-[#2A1245] p-6 border-r border-[#c276f4]">
            <div className="text-sm text-gray-400">Hours</div>
            <div className="font-bold">40</div>
          </div>
          <div className="bg-[#2A1245] p-6">
            <div className="text-sm text-gray-400">Format</div>
            <div className="font-bold">Online</div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">What You'll Get</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#2A1245] rounded-lg p-8 text-center">
            <Star className="w-12 h-12 mx-auto mb-6 text-[#FFD60A]" />
            <h3 className="text-xl font-bold mb-4">Guaranteed Internship</h3>
            <p className="text-gray-400">
              Start building your career immediately with our partner companies. Real experience, real projects.
            </p>
          </div>
          <div className="bg-[#2A1245] rounded-lg p-8 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-6 text-[#FFD60A]" />
            <h3 className="text-xl font-bold mb-4">1-on-1 Career Mentorship</h3>
            <p className="text-gray-400">
              Personal guidance from industry experts to fast-track your career growth and land your dream job.
            </p>
          </div>
          <div className="bg-[#2A1245] rounded-lg p-8 text-center">
            <Award className="w-12 h-12 mx-auto mb-6 text-[#FFD60A]" />
            <h3 className="text-xl font-bold mb-4">ICT Cortex Certification</h3>
            <p className="text-gray-400">
              Gain a recognized qualification that sets you apart in the job market and opens doors to top
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#2A1245] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16">Why ICT Cortex Kosovo?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[#FFD60A] text-4xl font-bold mb-2">400+</div>
              <div className="text-sm text-gray-400">Students enrolled</div>
            </div>
            <div>
              <div className="text-[#FFD60A] text-4xl font-bold mb-2">97%</div>
              <div className="text-sm text-gray-400">Employment rate</div>
            </div>
            <div>
              <div className="text-[#FFD60A] text-4xl font-bold mb-2">30+</div>
              <div className="text-sm text-gray-400">Employee Partners</div>
            </div>
            <div>
              <div className="text-[#FFD60A] text-4xl font-bold mb-2">2</div>
              <div className="text-sm text-gray-400">Academies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "FUNDAMENTALS OF PROJECT MANAGEMENT",
              description:
                "Master the core principles and methodologies that form the foundation of successful project management.",
            },
            {
              title: "PROJECT INITIATION AND SCOPE",
              description: "Learn how to effectively start projects and define their boundaries for optimal execution.",
            },
            {
              title: "LEADERSHIP AND TEAM MANAGEMENT",
              description:
                "Develop crucial leadership skills and techniques for building and managing high-performing teams.",
            },
            {
              title: "PROJECT PLANNING AND ORGANIZATION",
              description:
                "Gain expertise in creating comprehensive project plans and organizing resources efficiently.",
            },
            {
              title: "SCHEDULING AND TIME MANAGEMENT",
              description:
                "Master the art of creating realistic schedules and managing time effectively throughout the project lifecycle.",
            },
            {
              title: "BUDGET AND COST MANAGEMENT",
              description: "Learn to create, monitor, and control project budgets to ensure financial success.",
            },
            {
              title: "QUALITY MANAGEMENT",
              description:
                "Discover techniques to ensure project deliverables meet or exceed stakeholder expectations.",
            },
            {
              title: "AGILE PROJECT MANAGEMENT",
              description:
                "Explore the principles of Agile methodologies and their application in modern project environments.",
            },
            {
              title: "MONITORING AND CONTROLLING",
              description:
                "Learn how to track project progress, identify issues early, and implement corrective actions.",
            },
            {
              title: "PROJECT CLOSURE",
              description:
                "Master the steps to successfully close projects, capture lessons learned, and celebrate achievements.",
            },
            {
              title: "PROPOSAL WRITING",
              description:
                "Develop skills to create compelling project proposals that win client approval and secure funding.",
            },
            {
              title: "STAKEHOLDER MANAGEMENT",
              description:
                "Learn strategies to effectively engage and manage stakeholders throughout the project lifecycle.",
            },
          ].map((module, i) => (
            <div
              key={i}
              className="bg-[#2A1245] rounded-lg p-6 hover:bg-[#3A1D55] transition-colors duration-300 cursor-pointer group"
            >
              <h3 className="text-xl font-bold mb-3 text-[#FFD60A] group-hover:text-white transition-colors duration-300">
                {module.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lecturers Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16">Meet the Lecturers</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-start gap-6">
            <Image
              src="https://academy.ictcortex.me/wp-content/uploads/2023/01/Tarik-Zaimovic.png"
              alt="Tarik Zaimi"
              width={160}
              height={160}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-bold text-xl mb-2">Tarik Zaimi</h3>
              <p className="text-sm text-gray-400">ICT Cortex</p>
              <p className="text-sm text-gray-400">CEO, Co-founder</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <Image
              src="https://academy.ictcortex.me/wp-content/uploads/2023/01/Iva-Malesevic-1.png"
              alt="Iva Malesi"
              width={160}
              height={160}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-bold text-xl mb-2">Iva Malesi</h3>
              <p className="text-sm text-gray-400">Bild studio</p>
              <p className="text-sm text-gray-400">People Development Officer, NLP trener</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#2A1245] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Don't just take our word for it!</h2>
            <p className="text-[#FFD60A] mb-12 font-bold">90% of our students are employed</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1E0B32] rounded-lg p-6">
                <p className="mb-6">
                  Attending the course at Cortex Academy turned out to be a good choice. It was designed in a way that
                  is easy to understand and can be useful for those who want to start or expand their knowledge of
                  Frontend programming. After successfully completing the course, a practical project followed, which
                  was the most interesting part for me. The project was implemented in the presence of mentor Zoran
                  Mastilović, who was available for suggestions at any time.
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://academy.ictcortex.me/wp-content/uploads/2023/01/Marina-Vojinovic.jpg"
                    alt="Marina Vojinovic"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">Marina Vojinovic</div>
                    <div className="text-sm text-gray-400">Frontend Developer</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1E0B32] rounded-lg p-6">
                <p className="mb-6">
                  As a participant of the Cortex Academy project management course, with segments of agile and scrum
                  methodology, by creating a test task, I successfully mastered practical skills that are key to the
                  position of product manager. I would like to highlight the help of mentors who monitored my progress
                  and helped me become competitive in the IT industry job market. Thanks to this course, I learned to
                  work with tools such as the JIRA platform, Confluence, Click-up, Miro board and gained a large number
                  of connections.
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://academy.ictcortex.me/wp-content/uploads/2023/01/Jelena-Rajkovic-scaled.jpg"
                    alt="Jelena R."
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">Jelena R.</div>
                    <div className="text-sm text-gray-400">Product Manager</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1E0B32] rounded-lg p-6">
                <p className="mb-6">
                  The internship for high school students helped me see what working in companies is like and what the
                  labor market requires of us after graduation. Based on the internship I completed, I have already had
                  the opportunity to be employed in one of the cluster companies.
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://academy.ictcortex.me/wp-content/uploads/2021/10/Jovan-Popovic-1.jpg"
                    alt="Gjovan P."
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">Gjovan P.</div>
                    <div className="text-sm text-gray-400">High School Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guaranteed Internship Placement Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Guaranteed Internship Placement with Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          <Image
            src="https://i.postimg.cc/Y9SLjCyH/bagolina.png"
            alt="Bagolina"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://i.postimg.cc/6qk8HL6W/bild.png"
            alt="Bild"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://i.postimg.cc/xjhNTYvw/modelslovenia.png"
            alt="Model Slovenia"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://i.postimg.cc/SsZ8GMzR/datadesign.png"
            alt="Data Design"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://i.postimg.cc/MTXmMS9h/codeus-logo.png"
            alt="Codeus"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://i.postimg.cc/cJFcLHBR/coinis.png"
            alt="Coinis"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://i.postimg.cc/g0zDpR8c/Fleka-logo-1-e1674223739111.png"
            alt="Fleka"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://api.prishtinamall.com/Uploads/Images/StoreLogos/5F732688-6D64-4A19-BC6E-4D6DDB89110F.svg"
            alt="Prishtina Mall"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
          <Image
            src="https://telegrafi.com/wp-content/uploads/2021/11/Agusholli-rebranding-02-scaled.jpg"
            alt="Agusholli"
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-[#FFD60A] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <div className="text-black mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
              <p className="mb-8">
                Don't miss this opportunity. Book a free consultation now and take the first step towards a rewarding
                career in project management.
              </p>
              <Button variant="outline" className="rounded-full font-bold">
                Schedule Your Free Consultation →
              </Button>
            </div>
            <Image
              src="https://academy.ictcortex.me/wp-content/uploads/2021/11/znanje-je-izbor-1.png"
              alt="Knowledge is a choice"
              width={400}
              height={400}
              className="hidden md:block object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1E0B32] rounded-t-[50%]"></div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">Choose your Group</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { month: "February", status: "SOLD OUT" },
            { month: "March 1st", status: "REGISTER NOW" },
            { month: "April 1st", status: "REGISTER NOW" },
          ].map((group, i) => (
            <div key={i} className="relative bg-white rounded-lg p-8 text-black">
              {i > 0 && (
                <div className="absolute -top-3 -right-3 bg-[#c276f4] text-white px-4 py-1 rounded-full transform rotate-12 font-bold">
                  Early Bird
                </div>
              )}
              <div className="text-center mb-8">
                <div className="text-sm mb-2 text-gray-600 font-bold">Starting from</div>
                <div className="text-4xl font-bold">
                  <span className="text-gray-400 line-through">€600</span> <span className="text-red-600">€150</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD60A]">✓</span> <span className="font-bold">6 months</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD60A]">✓</span> <span className="font-bold">International certificate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD60A]">✓</span>{" "}
                  <span className="font-bold">Career development program</span>
                </li>
              </ul>
              <Button
                className={`w-full font-bold ${
                  group.status === "SOLD OUT"
                    ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    : "bg-[#FFD60A] text-black hover:bg-[#FFD60A]/90"
                }`}
              >
                {group.status}
              </Button>
              <div className="text-center mt-4 text-gray-600 font-bold">{group.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#c276f4]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ICT Cortex Kosovo</div>
              <Button variant="link" className="text-[#FFD60A] p-0 font-bold">
                Become a Partner
              </Button>
            </div>
            <div>
              <h3 className="font-bold mb-4">Academies</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#FFD60A] font-bold">
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#FFD60A] font-bold">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@ictcortex.com</li>
                <li>+383 44 222 222</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#FFD60A] font-bold">
                FB
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FFD60A] font-bold">
                IN
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FFD60A] font-bold">
                IG
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FFD60A] font-bold">
                YT
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

