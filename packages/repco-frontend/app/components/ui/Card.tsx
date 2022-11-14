import { cva, cx, VariantProps } from 'class-variance-authority'
import { ClassProp } from 'class-variance-authority/dist/types'
import { DropdownMenuCards } from './Dropdown'

const styles = cva('p-4 rounded-lg border shadow-xs', {
  variants: {
    disabled: {
      true: 'opacity-70 pointer-events-none cursor-not-allowed',
    },
    variantSize: {
      md: 'w-3/4',
      full: 'w-full',
    },
    variant: {
      default: ['my-1'],
      centered: ['justify-center flex-shrink text-center'],
      hover: [
        'block my-2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100',
      ],
      bare: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export function ContentItemCard(props: CardProps) {
  const className = cx(styles(props))
  return (
    <div className={className} {...props}>
      <div className="flex flex-row  justify-end">
        <div className="w-full">{props.children}</div>

        <div>
          <DropdownMenuCards />
        </div>
      </div>
    </div>
  )
}
export type CardProps = CardBaseProps &
  React.DetailsHTMLAttributes<HTMLDivElement> &
  ClassProp
export interface CardBaseProps extends VariantProps<typeof styles> {}
