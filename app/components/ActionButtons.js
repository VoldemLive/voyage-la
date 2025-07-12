import { Phone, Globe, MapPin } from "lucide-react"
import { Button } from "./ui/button"

export function ActionButtons({ location }) {
  if (!location) return null
  const { phone, website, address, name } = location
  return (
    <div className="flex gap-2 flex-wrap">
      {phone && (
        <Button onClick={() => window.open(`tel:${phone}`)} size="sm">
          <Phone className="w-4 h-4 mr-1" />
          Позвонить
        </Button>
      )}
      {website && (
        <Button
          onClick={() => window.open(website, "_blank")}
          size="sm"
          variant="outline"
        >
          <Globe className="w-4 h-4 mr-1" />
          Сайт
        </Button>
      )}
      {address && (
        <Button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`,
              "_blank"
            )
          }
          size="sm"
          variant="ghost"
        >
          <MapPin className="w-4 h-4 mr-1" />
          На карте
        </Button>
      )}
    </div>
  )
}
