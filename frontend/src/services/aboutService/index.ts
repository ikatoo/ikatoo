import { AboutPageServiceType } from '../../types/AboutPage'
import api from '../api'

const getHeaders = () => {
  const token = localStorage.getItem('IKATOO_AuthToken') ?? ''

  return {
    headers: {
      Authorization: `bearer ${token}`,
      ContentType: 'application/json'
    }
  }
}

const serviceErrorMessage = (error: Error) => {
  console.log('----------------')
  console.log('Service error:', error)
  console.log('----------------')
}

export default {
  create: async ({
    title,
    description,
    user_id
  }: Omit<Partial<AboutPageServiceType>, 'id'>) => {
    try {
      await api.post(
        '/about',
        {
          title,
          description,
          user_id
        },
        getHeaders()
      )
    } catch (error) {
      error instanceof Error && serviceErrorMessage(error)
    }
  },
  update: async ({
    id,
    title,
    description,
    user_id
  }: Partial<AboutPageServiceType>) => {
    try {
      await api.put(
        '/about',
        {
          id,
          title,
          description,
          user_id
        },
        getHeaders()
      )
    } catch (error) {
      error instanceof Error && serviceErrorMessage(error)
    }
  },
  get: async (userId: string) => {
    try {
      const { data } = await api.get<AboutPageServiceType>(
        `/about/user_id/${userId}`,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )

      return data
    } catch (error) {
      error instanceof Error && serviceErrorMessage(error)
    }
  },
  getByDomain: async (domain: string) => {
    try {
      const { data } = await api.get<AboutPageServiceType>(
        `/about/domain/${domain}`,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )

      return data
    } catch (error) {
      error instanceof Error && serviceErrorMessage(error)
    }
  }
}
