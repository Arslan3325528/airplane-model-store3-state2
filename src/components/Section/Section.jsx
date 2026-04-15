import PropTypes from 'prop-types';
import css from "./Section.module.css"; 


export function Section({
  isOn = true,
  title,
  allTypes,
  numberOfSelectedModels,
  isCartOn,
  bgColor = "unset",
  children
})
{
  return (
    <>
      {isOn && 
        <section
          style={{ backgroundColor: bgColor }}
          className={css.section}
        >
          {/* //! CSS-модулі з композицією класів */}
          {/* {title && <h2 className={`${css.title} ${css.lugrasimoBold}`}>{title}</h2>} */}
          {/* //! CSS-модулі з composes */}
          {/* {title && <h2 className={css.titleLugrasimoBold}>{title}</h2>} */}
          {/* //! CSS-модулі з composes з фоновим зображенням */}
          {title &&
            <div className={css.bgTitleBox}>
              <h2 className={css.titleLugrasimoBold}>{title}</h2>
              <h3 className={css.titleTotalTypes}>
                Кількість типів ЛА:&nbsp;
                <span>
                  {isCartOn ? numberOfSelectedModels : allTypes}
                </span>
              </h3>
            </div>}
          {children}
        </section>
      }
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props ✅
//! 2.Коли змінюється state
