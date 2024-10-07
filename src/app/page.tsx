import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="isolate flex min-h-svh flex-col bg-white">
      <section className="flex flex-1 flex-col">
        <header className="py-12">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Browse through the most frequently asked questions
              </p>
            </div>
          </div>
        </header>
        <div className="flex-1 bg-gray-50 py-8">
          <div className="mx-auto max-w-3xl px-6">
            <dl className="divide-y divide-gray-900/10">
              <Disclosure as="div" defaultOpen className="py-8">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between gap-6 text-left text-gray-900">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                      How can I track my order?
                    </span>
                    <span className="flex h-7 items-center">
                      <PlusSmallIcon className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon className="size-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel
                  as="dd"
                  className="prose prose-a:text-blue-600 mt-6 pr-12"
                >
                  <p>You can track your order using the following steps:</p>
                  <ol role="list">
                    <li>
                      Go to the{" "}
                      <a href="/order-tracking.html">order tracking</a> page.
                    </li>
                    <li>Enter your order number and email address.</li>
                    <li>
                      Click on the Track Order button to view the current status
                      of your shipment.
                    </li>
                  </ol>
                  <p>
                    If you encounter any issues, please visit our{" "}
                    <a href="help-center.html">help center</a>.
                  </p>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" defaultOpen className="py-8">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between gap-6 text-left text-gray-900">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                      What is your return policy?
                    </span>
                    <span className="flex h-7 items-center">
                      <PlusSmallIcon className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon className="size-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel
                  as="dd"
                  className="prose prose-a:text-blue-600 mt-6 pr-12"
                >
                  <p>
                    We offer a 30-day return policy on most items. Here are some
                    key points:
                  </p>
                  <ol role="list">
                    <li>
                      <strong>Items must be in original condition</strong>:
                      Unworn, unused, and unwashed.
                    </li>
                    <li>
                      <strong>Include original packaging and tags</strong>: All
                      items should be returned with their original packaging and
                      tags.
                    </li>
                    <li>
                      <strong>Proof of purchase</strong>: A receipt or proof of
                      purchase is required.
                    </li>
                  </ol>
                  <p>
                    For more detailed information, read our full{" "}
                    <a href="return-policy.html">return policy</a>.
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
