import { ArrowCircleRight, ChartCircle, Clock, CloseCircle, TickCircle } from 'iconsax-react-native'
import { AppColor } from '../theme/color'

   export  const status = {
    ONGOING:1,
    PENDING:2,
    COMPLETED:3,
    CANCEL:4
}
 export const taskValues = [
    {
      status: 1,
      title: "Ongoing",
      color: AppColor.ONGOING,
      icon: <ChartCircle size="32" color={AppColor.WHITE} />,
      
    
    },
    {
    status: 2,
      title: "Pending",
      color: AppColor.PENDİNG,
      icon: <Clock size="32" color="#FF8A65" />,
      
    },
    {
      status: 3,
      title: "Completed",
      color: AppColor.COMPLETED,
      icon: <TickCircle size="32" color={AppColor.WHITE} />,
      
    },
    {
    status: 4,
      title: "Cancel",
      color: AppColor.CANCEL,
      icon: <CloseCircle size="32" color={AppColor.WHITE} />,
      
    },

  ]