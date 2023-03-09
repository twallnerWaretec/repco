import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from '@radix-ui/react-icons'
import { useSearchParams } from '@remix-run/react'
import { ButtonWithIcon } from '../primitives/button'

type SortOrder = {
  TITLE_DESC: {
    name: string
    value: string
    icon: JSX.Element
    ariaLabel: string
  }
  TITLE_ASC: {
    name: string
    value: string
    icon: JSX.Element
    ariaLabel: string
  }
  PUB_DATE_ASC: {
    name: string
    value: string
    icon: JSX.Element
    ariaLabel: string
  }
  PUB_DATE_DESC: {
    name: string
    value: string
    icon: JSX.Element
    ariaLabel: string
  }
}

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams()
  const orderBy = searchParams.get('orderBy') || 'PUB_DATE_DESC'
  const sortOrder: SortOrder = {
    TITLE_DESC: {
      name: 'Title (A-Z)',
      value: 'TITLE_ASC',
      icon: <ArrowDownIcon />,
      ariaLabel: 'Sort by title in descending order',
    },
    TITLE_ASC: {
      name: 'Title (Z-A)',
      value: 'TITLE_DESC',
      icon: <ArrowUpIcon />,
      ariaLabel: 'Sort by title in ascending order',
    },
    PUB_DATE_ASC: {
      name: 'Publication date',
      value: 'PUB_DATE_ASC',
      icon: <ArrowUpIcon />,
      ariaLabel: 'Sort by publication date in ascending order',
    },
    PUB_DATE_DESC: {
      name: 'Publication date ',
      value: 'PUB_DATE_DESC',
      icon: <ArrowDownIcon />,
      ariaLabel: 'Sort by publication date in descending order',
    },
  }
  const titleSortOrder = sortOrder.TITLE_ASC.value
  const pubDateSortOrder = sortOrder.PUB_DATE_ASC.value

  const handleTitleSortClick = () => {
    const newOrderBy =
      orderBy === titleSortOrder ? sortOrder.TITLE_DESC.value : titleSortOrder
    setSearchParams({ orderBy: newOrderBy })
  }

  const handlePubDateSortClick = () => {
    const newOrderBy =
      orderBy === pubDateSortOrder
        ? sortOrder.PUB_DATE_DESC.value
        : pubDateSortOrder
    setSearchParams({ orderBy: newOrderBy })
  }

  return (
    <div>
      <h2 className="text-lg pt-2 w-full border-b-2 border-gray-200 mb-2">
        Sort by
      </h2>
      <div className="flex flex-col">
        <div>
          <ButtonWithIcon
            type="button"
            className="text-brand-primary"
            onClick={handleTitleSortClick}
            icon={
              orderBy === sortOrder.TITLE_ASC.value ? (
                sortOrder.TITLE_ASC.icon
              ) : orderBy === sortOrder.TITLE_DESC.value ? (
                sortOrder.TITLE_DESC.icon
              ) : (
                <MinusIcon />
              )
            }
            aria-label={
              orderBy === sortOrder.TITLE_ASC.value
                ? sortOrder.TITLE_ASC.ariaLabel
                : orderBy === sortOrder.TITLE_DESC.ariaLabel
                ? sortOrder.TITLE_DESC.ariaLabel
                : 'not selected'
            }
          >
            {orderBy === sortOrder.TITLE_ASC.value
              ? sortOrder.TITLE_ASC.name
              : sortOrder.TITLE_DESC.name}
          </ButtonWithIcon>
        </div>
        <div>
          <ButtonWithIcon
            type="button"
            className="text-brand-primary"
            onClick={handlePubDateSortClick}
            icon={
              orderBy === sortOrder.PUB_DATE_ASC.value ? (
                sortOrder.PUB_DATE_ASC.icon
              ) : orderBy === sortOrder.PUB_DATE_DESC.value ? (
                sortOrder.PUB_DATE_DESC.icon
              ) : (
                <MinusIcon />
              )
            }
            aria-label={
              orderBy === sortOrder.PUB_DATE_ASC.value
                ? sortOrder.PUB_DATE_ASC.ariaLabel
                : orderBy === sortOrder.PUB_DATE_DESC.ariaLabel
                ? sortOrder.PUB_DATE_DESC.ariaLabel
                : 'not selected'
            }
          >
            {orderBy === sortOrder.PUB_DATE_ASC.value
              ? sortOrder.PUB_DATE_ASC.name
              : sortOrder.PUB_DATE_DESC.name}
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  )
}
