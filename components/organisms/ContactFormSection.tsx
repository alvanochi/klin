import ContactForm from "../molecules/ContactForm"
import ContactInformation from "../molecules/ContactInformation"

export default function ContactFormSection() {
  return (
    <section className="py-8 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInformation />

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Kirim Pesan</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
