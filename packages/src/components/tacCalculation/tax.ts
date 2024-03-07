// 专项附加扣除类型
// 1. 子女教育
// 2. 赡养老人
// 3. 继续教育(学校)
// 4. 继续教育(证书)
// 5. 住房贷款
// 6. 大病医疗
type SpecialDeductionType =
  | "children"
  | "elder"
  | "education-school"
  | "education-certificate"
  | "housing"
  | "medical";

class IITCalculator {
  private salary: {
    monthlySalary: number;
    yearEnd: number;
  } = {
    monthlySalary: 0,
    yearEnd: 0,
  };
  private socialInsuranceMonthlyAmount = 0;

  private specialDeductionTypes: Array<SpecialDeductionType> = [];
  private medicalAmount = 0;

  constructor() {}

  /**
   * @description 添加工资（通过工资计算年薪）
   */
  addSalary(
    monthlySalary,
    yearEnd?: { value: number; type: "month" | "amount" }
  ) {
    this.salary.monthlySalary = monthlySalary;
    if (yearEnd) {
      this.salary.yearEnd =
        yearEnd.type === "amount"
          ? yearEnd.value
          : monthlySalary * yearEnd.value;
    }
  }

  getYearSalary() {
    return this.salary.monthlySalary * 12 + this.salary.yearEnd;
  }

  /**
   * @description 添加五险一金，计算年五险一金缴纳额
   * @param {number} monthlyAmount 月度缴纳金额
   */
  addSocialInsurance(monthlyAmount) {
    this.socialInsuranceMonthlyAmount = monthlyAmount;
  }

  getYearSocialInsurance() {
    return this.socialInsuranceMonthlyAmount * 12;
  }

  /**
   * @description 添加专项附加扣除
   * @param {string} type 专项附加扣除类型
   */
  addSpecialDeduction(
    SpecialDeductionType: SpecialDeductionType,
    medicalAmount?: number
  ) {
    this.specialDeductionTypes.some((t) => t !== SpecialDeductionType) &&
      this.specialDeductionTypes.push(SpecialDeductionType);

    if (medicalAmount) {
      this.medicalAmount = medicalAmount;
    }
  }

  /**
   * @description 计算专项附加扣除
   */
  private getSpecialDeduction() {
    return this.specialDeductionTypes.reduce((r, v) => {
      switch (v) {
        case "children":
          return r + 2000 * 12;
        case "elder":
          return r + 3000 * 12;
        case "education-school":
          return r + 400 * 12;
        case "education-certificate":
          return r + 3600;
        case "housing":
          return r + 1500 * 12;
        case "medical":
          return r + this.medicalAmount;
        default:
          return r;
      }
    }, 0);
  }

  calcIIT() {
    // 计算年薪
    const yearSalary = this.getYearSalary();
    // 年终奖是否单独计税

    // 五险一金缴纳金额
    const yearSocialInsurance = this.getYearSocialInsurance();
    // 专项附加扣除金额
    const specialDeduction = this.getSpecialDeduction();
    // 计算需要缴纳个税的金额
    let taxableAmount =
      yearSalary - yearSocialInsurance - specialDeduction - 60000;
    // 计算个税
    return this.calcTaxableAmount(taxableAmount);
  }

  // 计算个税（金额 * 税率 - 速算扣除）
  private calcTaxableAmount(taxableAmount: number) {
    if (taxableAmount <= 36000) {
      return taxableAmount * 0.03;
    } else if (taxableAmount <= 144000) {
      return taxableAmount * 0.1 - 2520;
    } else if (taxableAmount <= 300000) {
      return taxableAmount * 0.2 - 16920;
    } else if (taxableAmount <= 420000) {
      return taxableAmount * 0.25 - 31920;
    } else if (taxableAmount <= 660000) {
      return taxableAmount * 0.3 - 52920;
    } else if (taxableAmount <= 960000) {
      return taxableAmount * 0.35 - 85920;
    } else {
      return taxableAmount * 0.45 - 181920;
    }
  }
}
