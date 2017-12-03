import uuidv1 from 'uuid'
import uuidv4 from 'uuid'

const uuid = () => {
  const timestampPortion = uuidv1()
  const randomPortion = uuidv4()
  return timestampPortion + randomPortion
}

export default uuid
