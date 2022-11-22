type TermDepositClient = {
  membershipClient: any;
  accountOriginationClient: any;
  countryInformationClient: any;
};

export class TermDepositService {
  private static _instance: TermDepositService = new TermDepositService();

  constructor() {
    if (TermDepositService._instance) {
      throw new Error(
        'Error: Instantiation failed: Use TermDepositService.getInstance() instead of new.'
      );
    }
    TermDepositService._instance = this;
  }

  public static instance(): TermDepositService {
    return TermDepositService._instance;
  }

  public initClients = (clients: TermDepositClient) => {};
}
